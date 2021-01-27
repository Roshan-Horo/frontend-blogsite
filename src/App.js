import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Headers from './components/Headers'
import Footers from './components/Footers'
import './App.css'
import {Container} from 'react-bootstrap'
import HomeScreen from './Screen/HomeScreen'
import RegisterScreen from './Screen/RegisterScreen'
import LoginScreen from './Screen/LoginScreen'
import PostScreen from './Screen/PostScreen'
import PostEditScreen from './Screen/PostEditScreen'




function App() {
  return (
    <Router>
      <Headers />
      <main className="py-3">
       <Container>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/posts/:id" component={PostScreen} exact />
        <Route path="/post/:id/edit" component={PostEditScreen} exact/>
       </Container>
      </main>
     <Footers />
    </Router>
  );
}

export default App;
