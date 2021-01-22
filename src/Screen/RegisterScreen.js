import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../actions/userActions'

import  {  Form, Input, Button, Checkbox  } from 'antd';
const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };


const RegisterScreen = (location,history) => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const dispatch = useDispatch()

    const userRegister = useSelector(state => state.userRegister)
    const { loading, error, userInfo} = userRegister

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect( () => {
      if(userInfo){
        history.push(redirect)
      }
      // eslint-disable-next-line
    },[history,userInfo, redirect])

    const submitHandler = (e) => {
      e.preventDefault()
      if(password !== confirmPassword){
        console.log('Password do not match')
      }else{
        dispatch(register(name,email,password))
      }
    }

    return (
        <React.Fragment>
           <h1>Sign Up</h1> 

           <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
   
    >
      <Form.Item
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        rules={[
          {
            required: true,
            message: 'Please input your Name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
      label="Confirm Password"
      value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="submit" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
        </React.Fragment>
    )
}

export default RegisterScreen
