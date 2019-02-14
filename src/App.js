import React from "react";
//import { Router } from './components'
//import routes from './pages/routes'
import "./styles/index.less";
import { Layout, Col, Row } from "antd";
import { Button, Progress } from "antd";
import "antd/dist/antd.css";
import path from "path";
import ListFiles from "./components/ListFiles";

const { dialog } = require("electron").remote;
let percent=0;
const { Header, Footer, Sider, Content } = Layout;
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultDir: path.resolve("./"),
      percent: 0
    };
    console.log(this.state);
  }

  componentDidMount() {
    //console.clear();
  }

  updateState = state => {
    this.setState(
      {
        ...state
      },
      () => {
        console.log("updateState", this.state);
      }
    );
  };

  updateProgress = (percent) =>{
    console.log(percent)
    this.setState({
      percent: percent
    });
  }

  clickOpen = e => {
    e.preventDefault();
    dialog.showOpenDialog({ properties: ["openDirectory"] }, dirname => {
      this.updateState({ defaultDir: dirname[0] });
    });
  };
  render() {
    const { defaultDir } = this.state;
    return (
      <div id="app">
    <Progress percent={this.state.percent}></Progress>
        <Row>
          <Col span={24}>Titre</Col>
        </Row>
        <Row>
          <Col span={6}>
            <Button
              type="primary"
              icon="download"
              onClick={e => this.clickOpen(e)}
            >
              Open.....
            </Button>
            <h2>Liste</h2>
                  <div style={{height:"90vh", overflow:"auto"}}>
                    <ListFiles defaultDir={defaultDir} onProgress={this.updateProgress}/>
                  </div>
                
          </Col>
          <Col span={18}>
            <h2>Détail</h2>
          </Col>
        </Row>
      </div>
    );
  }
} // class App end
