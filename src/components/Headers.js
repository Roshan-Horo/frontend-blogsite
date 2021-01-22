import React from 'react'
import {  Layout, Menu, Typography } from 'antd';
const { Header } = Layout;
const { Title } = Typography;

const Headers = () => {
    return (
        <React.Fragment>
 
        <Header>
        
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Sign In</Menu.Item>
          <Menu.Item key="6">Sign Up</Menu.Item>
          <Menu.Item key="6">Create Post</Menu.Item>
        </Menu>
      </Header>
            
        </React.Fragment>
    )
}

export default Headers
