import React from 'react';
import { Jumbotron, Row } from "react-bootstrap";
import "./style.css";
import logo from "../../assets/projectLogo.png"

//Header on both pages
function Header() {
    return (
        <Jumbotron fluid>
            <div>
                <img src={logo} alt="Logo" style={{ width: "400px", maxHeight: "400px", marginTop: "10%", paddingLeft: "5%" }} />
            </div>
        </Jumbotron>

    )
}
export default Header;