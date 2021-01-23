import React from 'react'
import { Link } from 'react-router-dom'
import { Row , Col} from 'react-bootstrap'
import Post from '../components/Post'


const HomeScreen = () => {

    const posts = ["1","2","3","4","5","6","7","8","9","10"]
    return (
        <React.Fragment>
         <h1>Treanding Posts</h1>

         <Row>
          {posts.map(post => (
            
              <Col  sm={12} md={6} lg={4} xl={3}>
                <Post post={post} key={post._id}/>

              </Col>
          ))}
         </Row>
        
         
        </React.Fragment>

        
    )


}

export default HomeScreen