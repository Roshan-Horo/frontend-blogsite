import React from 'react'
import {Link} from 'react-router-dom'
import { Card,Button } from 'react-bootstrap'

const Post = ({post}) => {
    return (
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://picsum.photos/200/100" />
  <Card.Body>
    <Card.Title>{post.title}</Card.Title>
    <Card.Text>
      {post.description}
    </Card.Text>
    <Button variant="primary">Show More</Button>
  </Card.Body>
</Card>
    )
}

export default Post
