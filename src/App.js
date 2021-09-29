import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';

class App extends React.Component{
    constructor(props){

      super(props)

      this.state = {
        title : "Gian Akbar",
        headerLinkss : [
          {title : "Home", path: "/"},
          {title : "About", path: "/about"},
          {title : "Contact", path: "/contact"}
        ],
        home: {
          title: 'Gian Akbar',
          subTitle: 'Back End Developer',
          text: 'Checkout my projects below'
        },
        about: {
          title: 'About Me'
        },
        contact: {
          title: 'Let\'s Talk'
        }
      }
    }

    render(){
      return (
        <Router>
          <Container className="p-0" fluid={true}>
              <Navbar className="border-bottom" bg="transparent" expand="lg">
                <Navbar.Brand>Gian Akbar</Navbar.Brand>
                <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
                <Navbar.Collapse id="navbar-toggle">
                  <Nav className="ml-auto">
                      <Link className="nav-link" to="/">Home</Link>
                      <Link className="nav-link" to="/about">About</Link>
                      <Link className="nav-link" to="/contact">Contact</Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
              <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
              <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
              
              <Footer/>
          </Container>
        </Router>
      )
    }
}


export default App;
