import React,{useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { Row , Col} from 'react-bootstrap'
import Post from '../components/Post'
import {listPosts} from '../actions/postActions'


const HomeScreen = () => {
    const dispatch = useDispatch()
    const postList = useSelector( state => state.postList)
    const { loading,error,posts } = postList 
    
    useEffect( () => {
        dispatch(listPosts())
    },[dispatch])

    return (
        <React.Fragment>
         <h1>Treanding Posts</h1>

         {loading ? 'loading' : <Row>
          {posts.map(post => (
            
              <Col  key={post._id} sm={12} md={6} lg={4} xl={3}>
                <Post post={post}/>
              </Col>
          ))}
         </Row>}

        </React.Fragment>
 
    )


}

export default HomeScreen