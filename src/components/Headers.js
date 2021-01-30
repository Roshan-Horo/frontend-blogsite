import React,{useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { Container, Nav, Navbar, NavDropdown,Button} from 'react-bootstrap';
import { LinkContainer} from 'react-router-bootstrap'
import { Route, useHistory } from 'react-router-dom'
import { logout } from '../actions/userActions'
import { createPost} from '../actions/postActions'
import { POST_CREATE_RESET} from '../constants/postConstants'

const Headers = ({match,location}) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const postCreate = useSelector(state => state.postCreate)
    const { loading:loadingCreate, error:errorCreate, success:successCreate, post: createdPost} = postCreate

    useEffect( () => {
      if(successCreate){
        history.push(`/post/${createdPost._id}/edit`)
      }
    },[dispatch,history,userInfo, successCreate,createdPost])

    const logoutHandler = () => {
       dispatch(logout())
    }

    const createPostHandler = () => {
      if(userInfo){
        dispatch(createPost())
      }else{
        history.push(`/login`)
      }
    } 
    return (
      <header>
      <Navbar bg="dark" variant="dark" expand="lg">
       <Container>
       <LinkContainer to="/">
        <Navbar.Brand>BlogSite</Navbar.Brand>
       </LinkContainer>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">

        <Nav className="ml-auto">

        <Button variant="success" onClick={createPostHandler}><i className="fas fa-plus"></i>  create post</Button>


        
        {userInfo 
          ? (
            <NavDropdown title={userInfo.name} id="username">
             <LinkContainer to='/profile'>
              <NavDropdown.Item>
               Profile
              </NavDropdown.Item>
             </LinkContainer>
             <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item> 
            </NavDropdown>
            ) 
          : 
          (
            <LinkContainer to="/login">
            <Nav.Link><i className="fas fa-user"></i> SignIn</Nav.Link>
            </LinkContainer>
          )}

          {userInfo && userInfo.isAdmin 
            && (
              <NavDropdown title='Admin' id="adminmenu">
               <LinkContainer to='/admin/userlist'>
                <NavDropdown.Item>
                 Users
                </NavDropdown.Item>
               </LinkContainer>

               <LinkContainer to='/admin/postlist'>
                <NavDropdown.Item>
                 Posts
                </NavDropdown.Item>
               </LinkContainer>
                
              </NavDropdown>
              ) 
            }
 
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
      </header>
    )
}

export default Headers
