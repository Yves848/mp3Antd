import React from 'react';
//import { Router } from './components'
//import routes from './pages/routes'
import './styles/index.less';
import { Layout } from 'antd';
import { Button } from 'antd';
import 'antd/dist/antd.css';

const { Header, Footer, Sider, Content } = Layout;
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="app">
        <Layout>
          <Header>Header</Header>
          <Layout>
            <Sider>
              <Button type="primary" icon="download">
                Primary
              </Button>
            </Sider>
            <Content>Content</Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
} // class App end
