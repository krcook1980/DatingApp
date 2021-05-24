import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import './style.css'
// import isAuthenticated from '../lib/isAuthenticated'

const NavBar = () => (
<>
  <Navbar expand="lg" >
   
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      <Nav className=" home">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/dashboard">Chat</Nav.Link>
        <Nav.Link href="/settings">Settings</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  <header className="header text-center">Love is Blind</header>
  </>
)

export default NavBar;
