import React, { Component } from 'react';
import './App.css';
import Header from './Components/header';
import Content from './Components/contents';
import Footer from './Components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Read from './Components/read';
import Create from './Components/create';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";




class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar bg="primary" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/read">read</Nav.Link>
                <Nav.Link href="/create">create</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <Switch>
            <Route path="/" exact><Content /></Route>
            <Route path="/create" ><Create></Create></Route>
            <Route path="/read" ><Read></Read></Route> 
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
