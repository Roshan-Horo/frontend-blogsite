import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Avatar,Row, Col } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;


const HomeScreen = () => {

    const posts = ["1","2","3","4","5","6","7","8","9","10"]
    return (
        <React.Fragment>
         <h1>Treanding Posts</h1>

        <Row gutter={16}>
        {posts.map(post => (
            <Col className="gutter-row" span={6}>
            <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title="Card title"
      description="This is the description"
    />
  </Card>,
          </Col>
            ))}
        
        
       </Row>
         
        </React.Fragment>

        
    )


}

export default HomeScreen