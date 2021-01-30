import React,{ useEffect} from 'react'
import { Row,Col, Card, Image, ListGroup, Button } from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { listPostDetails, deletePost } from '../actions/postActions'

const PostScreen = ({match,history}) => {
    
    const dispatch = useDispatch()
    const postDetails = useSelector( state => state.postDetails)
    const { loading, post} = postDetails


    useEffect( () => {
        dispatch(listPostDetails(match.params.id))
    },[dispatch,match,])

    const deleteHandler = (id) => {
        if(window.confirm('Are you sure')){
            dispatch(deletePost(id))
            history.push("/")
        }
    }

    return (
        <React.Fragment>
        { loading ? 'loading' : <React.Fragment><Row>
         <Col>
          <Image src={post.image} alt="post_image" />
         </Col>
          
        </Row>
        <Row>
        <h2 as="div">{post.title}</h2>
         
        </Row>
        <Row>
         <Col md={3}>
          <Card>
           <ListGroup variant="flush">
            <ListGroup.Item>
             <Row>
              <Col>Category:</Col>
              <Col><strong>{post.category}</strong></Col>
             </Row>

            </ListGroup.Item>
            <ListGroup.Item>
             <Row>
              <Col>Creator:</Col>
              <Col><strong>{post.user}</strong></Col>
             </Row>

            </ListGroup.Item>

            <ListGroup.Item>
             <Row>
              <Col>Created At:</Col>
              <Col><strong>{post.createdAt}</strong></Col>
             </Row>

            </ListGroup.Item>

            <ListGroup.Item>
             <Row>
              <Col>Last Updated:</Col>
              <Col><strong>{post.updatedAt}</strong></Col>
             </Row>

            </ListGroup.Item>

            <ListGroup.Item>
             <Row>
              <Col>Delete:</Col>
              <Col>
              <Button 
              variant='danger' 
              className='btn-sm' 
              onClick={() => deleteHandler(post._id)}
           >
            <i className='fas fa-trash' ></i>
           </Button>
              </Col>
             </Row>

            </ListGroup.Item>

           </ListGroup>
          </Card>
         </Col>
         <Col md={6}>
          {post.description}
         </Col>
        </Row></React.Fragment>}
        </React.Fragment>
    )
}

export default PostScreen
