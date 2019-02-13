import React, { Component } from "react";

class ListFiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultDir: props.defaultDir
    };
    console.log(props.defaultDir);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.defaultDir !== this.props.defaultDir) {
      this.setState({
        defaultDir: this.props.defaultDir
      });
    }
  }
  render() {
    return (
      <div>
        <h1 style={{ color: "#eee" }}>ListFiles</h1>
      </div>
    );
  }
}

export default ListFiles;
