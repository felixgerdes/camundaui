import { Layout } from 'antd';
import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
/*import Header from './components/header/header';*/
import Nav from './components/nav/nav';
import Center from './components/center/center';
/*import Footer from './components/footer/footer';*/

import './App.css';
const {
  Header, Content, Footer, Sider,
} = Layout;



class App extends Component {
  
  render() {
    return (
      <Layout>
      <Header style={{ position: 'fixed', width: '100%', height: '10vh' }}>> 
        Header
      </Header>
      <Layout>
      <Nav />
        <Layout style={{ marginLeft: 200 }}>
        <Content >
        Footer
          <p>content</p><br/>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
        </Content>
        <Footer>
          Footer
          Footer
          Footer
          Footer
          Footer
          Footer
          Footer
          footer
          Footer
          Footer
          Footer
          Footer
          Footer
          Footer
          Footer
          Footer
          Footer
          Footer
          Footer
          Footer
          Footer
          Footer
          Footer
          Footer
        </Footer>
        </Layout>

      </Layout>
    </Layout>
    );
  }
}


export default App;
