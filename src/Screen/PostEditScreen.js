import React, {useState, useEffect} from 'react'
import { Form, Button} from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import axios from 'axios'
import { listPostDetails, updatePost} from '../actions/postActions'
import FormContainer from '../components/FormContainer'
import { POST_UPDATE_RESET } from '../constants/postConstants'

const PostEditScreen = ({match, history}) => {
    const postId = match.params.id

    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [uploading, setUploading] = useState(false)

    const dispatch = useDispatch()

    const postDetails = useSelector(state => state.postDetails)
    const { loading, error, post} = postDetails

    const postUpdate = useSelector(state => state.postUpdate)
    const { loading: loadingUpdate, error: errorUpdate, success: successUpdate} = postUpdate

    
    useEffect( () => {
      console.log(postId)
      if(successUpdate){
        dispatch({type: POST_UPDATE_RESET})
        history.push('/')
      }else{
        if(post.title){
          console.log(post.title)
        }else{
          setTitle(post.title)
          setImage(post.image)
          setCategory(post.category)
          setDescription(post.description)
        }
      }
    }, [dispatch,post,postId,history,successUpdate])

    const uploadFileHandler = async (e) => {
      const file = e.target.files[0]
      const formData = new FormData()
      formData.append('image',file)
      setUploading(true)

      try {
        const config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }

        const { data } = await axios.post('/api/upload',formData, config)

        setImage(data)
        setUploading(false)
      } catch (error) {
        console.log(error)
        setUploading(false)
      }
    }

    const submitHandler = (e) => {
      e.preventDefault()
      dispatch(updatePost({
        _id: postId,
        title,
        image,
        category,
        description
      }))
    }

    return (
        <React.Fragment>
        <FormContainer>
        <h1>Create Post</h1>
         {loading ? '<h2>loading...</h2>' : error ? 'error' : 
                    (<Form onSubmit={submitHandler} >
                    <Form.Group controlId='title'>
                     <Form.Label>Title</Form.Label>
                     <Form.Control
                      type='text'
                      placeholder='Enter Title'
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
       
                   <Form.Group controlId='image'>
                     <Form.Label>Image</Form.Label>
                     <Form.Control
                      type='text'
                      placeholder='Enter Image'
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                      ></Form.Control>
                      <Form.File 
                       id='image-file'
                       label='Choose File'
                       custom
                       onChange={uploadFileHandler}
                      ></Form.File>
                      {uploading && <h2>loading...</h2>}  
                    </Form.Group>

                   <Form.Group controlId='category'>
                     <Form.Label>Category</Form.Label>
                     <Form.Control
                      type='text'
                      placeholder='Enter Category'
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      ></Form.Control>
                   </Form.Group>

                   <Form.Group controlId="desc">
                   <Form.Label>Content</Form.Label>
                   <Form.Control 
                   as="textarea" 
                   value={description}
                   placeholder="Enter body of the post"
                   onChange={(e) => setDescription(e.target.value)}
                   rows={6} />
                 </Form.Group>
 
                 <Button type='submit' variant='primary'>Update</Button>
                 </Form>)
          }
    </FormContainer>
        </React.Fragment>
    )
}

export default PostEditScreen