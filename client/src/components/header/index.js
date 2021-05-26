import React from 'react';
import { Jumbotron, Row } from "react-bootstrap";
import "./style.css";
import projectLogo from "../../assets/projectLogo.png"

//Header on both pages
function Header() {
    return (
        <Jumbotron fluid>
            <div>
                <img src={projectLogo} alt="Logo" style={{ width: "400px", maxHeight: "400px", marginTop: "10%", paddingLeft: "5%" }} />
            </div>
        </Jumbotron>

    )
}
export default Header;