import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col} from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../actions/userActions'


const RegisterScreen = ({location,history}) => {
    const [name,setName] = useState('test')
    const [email,setEmail] = useState('test@example.com')
    const [password, setPassword] = useState('123456')
    const [confirmPassword, setConfirmPassword] = useState('123456')

    const dispatch = useDispatch()

    const userRegister = useSelector(state => state.userRegister)
    const {  userInfo} = userRegister

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect( () => {
      if(userInfo){
        history.push(redirect)
      }
      
    },[history,userInfo,redirect])

    const submitHandler = (e) => {
      e.preventDefault()
      if(password !== confirmPassword){
        console.log('Password do not match')
      }else{
        dispatch(register(name,email,password))
      }
    }

    return (
      <FormContainer>
      
      <h1>Sign Up</h1>
      
      <Form onSubmit={submitHandler} >
       <Form.Group controlId='name'>
        <Form.Label>Name</Form.Label>
        <Form.Control
         type='text'
         placeholder='Enter Name'
         value={name}
         onChange={(e) => {
          console.log(e.target.value) 
          setName(e.target.value)}}
         ></Form.Control>
       </Form.Group>

       <Form.Group controlId='email'>
        <Form.Label>Email Address</Form.Label>
        <Form.Control
         type='email'
         placeholder='Enter Email'
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         ></Form.Control>
      </Form.Group>

      <Form.Group controlId='password'>
       <Form.Label>Password</Form.Label>
       <Form.Control
        type='password'
        placeholder='Enter Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        ></Form.Control>
     </Form.Group>

     <Form.Group controlId='confirmPassword'>
       <Form.Label>Confirm Password</Form.Label>
       <Form.Control
        type='password'
        placeholder='Enter Password Again'
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        ></Form.Control>
     </Form.Group>

     <Button type='submit' variant='primary'>Register</Button>

      </Form>

      <Row className="py-3">
       <Col>
        Have an Account? <Link to={redirect ? `/login?redirect=${redirect}` : '/login'} >Login</Link>
       </Col>
      </Row>
  </FormContainer>
    )
}

export default RegisterScreen
