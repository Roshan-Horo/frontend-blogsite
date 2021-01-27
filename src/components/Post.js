import React from 'react'
import {Link} from 'react-router-dom'
import { Card,Button } from 'react-bootstrap'

const Post = ({post}) => {
    return (
        <Card  className="my-3 p-3 rounded">
        <Link to={`/posts/${post._id}`}>
             <Card.Img variant="top" src={post.image} />
        </Link>
        <Card.Body>
        <Link to={`/posts/${post._id}`}>
         <Card.Title as="div"><strong>{post.title}</strong></Card.Title>
         </Link>
         <Card.Text as="div" className="my-3">
          {post.category}
         </Card.Text>
         <Link to={`/posts/${post._id}`}>
          <Button variant="primary">Show More</Button>
         </Link>

         </Card.Body>
        </Card>
    )
}

export default Post
