import React, {useContext} from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import './style.css';
import {Link} from 'react-router-dom'
import UserContext from '../../contexts/userProvider'
import ProjectLogo1 from '../../assets/projectLogo3.png'
// import isAuthenticated from '../lib/isAuthenticated'

const NavBar = () => {
  const { userData } = useContext(UserContext)

 
  return(
<>
  <Navbar expand="lg" >
  {/* <Navbar.Brand href="#home"><img src={ProjectLogo} style={{width: "200px"}}/></Navbar.Brand> */}
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      <Nav className=" home">
        <Link to="/home" params={userData} className="home pl-3">Home</Link>
        <Link to="/dashboard" params={userData} className="home pl-3 pr-3">Chat</Link>
        <Link to="/settings" params={userData} className="home pr-3">Settings</Link>
        <Link to="/" className="home pr-3">Logout</Link>

      </Nav>
    </Navbar.Collapse>
  </Navbar>
  <header className="header text-center"><img src={ProjectLogo1} style={{width: "350px", marginTop: "-20px"}}/></header>
  </>
  )
  }

export default NavBar;
