import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Headers from './components/Headers'
import Footers from './components/Footers'
import './App.css'
import HomeScreen from './Screen/HomeScreen'
import RegisterScreen from './Screen/RegisterScreen'
import LoginScreen from './Screen/LoginScreen'

import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;



function App() {
  return (
    <Router>
     <Layout className="layout">
    <Headers />
    <Content style={{ padding: '0 50px' }}>
      
    
      <Route path="/" component={HomeScreen} exact/> 
      <Route path="/signup" component={RegisterScreen} exact/> 
      <Route path="/login" component={LoginScreen} exact/> 
    </Content>
    <Footers />
  </Layout>
    </Router>
  );
}

export default App;
