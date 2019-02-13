import React from "react";
//import { Router } from './components'
//import routes from './pages/routes'
import "./styles/index.less";
import { Layout } from "antd";
import { Button } from "antd";
import "antd/dist/antd.css";
import path from "path";
import ListFiles from './components/ListFiles'

const { dialog } = require("electron").remote;

const { Header, Footer, Sider, Content } = Layout;
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultDir: path.resolve("./")
    };
    console.log(this.state)
  }

  componentDidMount() {
    //console.clear();
  }

  updateState= (state) => {
    this.setState({
      ...state
    },() => {
      console.log('updateState',this.state)
    })
  }
  
  clickOpen = e => {
    e.preventDefault();
    dialog.showOpenDialog({ properties: ["openDirectory"] }, dirname => {
      this.updateState({defaultDir: dirname[0]});
      
    });
  };
  render() {
    const {defaultDir} = this.state;
    return (
      <div id="app">
        <Layout>
          <Header>
          <Button
                type="primary"
                icon="download"
                onClick={e => this.clickOpen(e)}
              >
                Open.....
              </Button>
          </Header>
          <Layout>
            <Sider style={{color: '#fff'}}>
              <ListFiles defaultDir={defaultDir}></ListFiles>
            </Sider>
            <Content>Content</Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
} // class App end
