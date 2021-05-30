import React, { useState, useContext } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import API from '../utils/API';
import Header from '../components/header';
import UserContext from '../contexts/userProvider';
import { useHistory, Link } from 'react-router-dom'
import './style.css';


export default function Login() {
    const { userData, setUserData } = useContext(UserContext)
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const history = useHistory();
    // 15:00 for functions
    const login = () => {
       API.login({username: loginUsername, password: loginPassword})
       .then(res => {
           
           if(res.data === "No User"){
               alert("I am sorry, try again")
           }
           else{
               setUserData(res.data)
               history.push("/home")

           }
       })
    }
    return (
        <>
            <Header className="header jumbotron"/>
            <Container style={{ background: "transparent"}} className="container rounded mb-5 p-4">

                <div className="App">
                    <div>
                        <Row>
                            <Col md="12" className="text-center login">

                                <h1>User Login</h1>
                            </Col>
                        </Row>
                        <Row className="text-center">
                            <Col md="6" className="text-right">

                                <input placeholder="username" className="input rounded text-center" onChange={e => setLoginUsername(e.target.value)} />
                            </Col>
                            <Col md="6" className="text-left">
                                <input placeholder="password" className="input rounded text-center" type="password" onChange={e => setLoginPassword(e.target.value)} />
                            </Col>
                        </Row>
                        <Row className="text-center mt-3">
                            <Col md="4">
                            </Col>
                            <Col md="4">

                                <Button style={{ width: "80%" }} className="btn" onClick={login}>Submit</Button>
                            </Col>
                            <Col md="4">

                            </Col>
                        </Row>
                        <Row className="text-center mt-5">
                            <Col>
                            <h2 className="login">Not a member yet?</h2>
                            </Col>
                        </Row>
                        <Row className="text-center">
                        <Col md="4">
                            </Col>
                            <Col>
                                <Link to="./SignupForm">
                                    <Button style={{ width: "80%" }}className="btn ">Join Today</Button>
                                </Link>
                            </Col>
                            <Col md="4">
                            </Col>
                        </Row>

                    </div>

                </div>

            </Container>
            {/* <Footer /> */}
        </>
    )

}