import React from 'react';
import { Jumbotron, Row } from "react-bootstrap";
import "./style.css";

//Header on both pages
function Header (){
    return(
        <Jumbotron fluid>
            <Row>
                <h1>Love Is Blind</h1>
                <p>Join us to find a deeper connection.</p>
            </Row>
      </Jumbotron>

    )
}
export default Header;