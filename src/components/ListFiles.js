import React, { Component } from "react";
import {List} from "antd";
import fs from 'fs';
import path from 'path';
//import nodeID3v2 from 'node-id3v2.4';
const NodeID3 = Promise.resolve(require('node-id3'));

class ListFiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultDir: props.defaultDir,
      files:[]
    };
    console.log(props.defaultDir);
  }

  getTags = (file) => {
    return new Promise((resolve, reject) => {
      let filename = path.resolve(this.state.defaultDir, file);
      resolve({})
    })
  }

  fillList = (dir) => {
    return new Promise((resolve, reject) => {
      fs.readdir(dir,(err,filelist)=> {
        if (filelist) {
          
          resolve(filelist.map((file,i) => {
            this.getTags(file)
            .then(json => {
              this.props.onProgress(i)
              return i + file
            })
            
          }));
        }
      })
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.defaultDir !== this.props.defaultDir) {
      this.setState({
        defaultDir: this.props.defaultDir
      }, () => {
        this.fillList(this.state.defaultDir)
        .then((files)=>{
          this.setState({files})
        });
      });
    }
  }
  render() {
    const list = this.state.files.map((file,i) => {
      return (<li key={i}>{file}</li>)
    })
    //console.log(list)
    return (
      <List size="small"    
        bordered
        dataSource={this.state.files}
        renderItem={item => (<List.Item style={{cursor:"pointer"}} onClick={(e) =>{alert(item)}}>{item}</List.Item>)}>
        
      </List>
      
    );
  }
}

export default ListFiles;
