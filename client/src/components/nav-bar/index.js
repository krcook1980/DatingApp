import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
// import isAuthenticated from '../lib/isAuthenticated'

const NavBar = () => (
  <Navbar expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        
          <Nav.Link><Link to="/Home">Home</Link></Nav.Link>
          <Nav.Link><Link to="/Dashboard">Chat</Link></Nav.Link>
          <Nav.Link> <Link to="/settings">Settings</Link></Nav.Link> 
    
      </Nav>
    </Navbar.Collapse>
  </Navbar >
)

export default NavBar;
