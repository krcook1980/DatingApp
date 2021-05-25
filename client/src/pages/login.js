import React, { useState, useContext } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import API from '../utils/API';
import Axios from 'axios';
import Header from '../components/header';
import UserContext from '../contexts/userProvider';
import { useHistory, Link } from 'react-router-dom'
import Footer from '../components/Footer';
import './style.css';


export default function Login() {
    const { userData, setUserData } = useContext(UserContext)
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const history = useHistory();
    // 15:00 for functions
    const login = () => {
        Axios({
            method: "POST",
            data: { username: loginUsername, password: loginPassword },
            withCredentials: true,
            url: "http://localhost:3000/login"
        }).then(res => {
            //if success then get user otherwise alert try again
            console.log(res.data)
            if (res.data === "No User") {
                alert("I am sorry, please try again")
            } else {
                setUserData(res.data)
                history.push("/home")
            }
        })
    }
    return (
        <>
            <Header />
            <Container>

                <div className="App">
                    <div>
                        <Row className="text-center">
                            <Col md="12" className="txt">

                                <h1>Login Here</h1>
                            </Col>
                        </Row>
                        <Row className="text-center">
                            <Col md="6">

                                <input placeholder="username" onChange={e => setLoginUsername(e.target.value)} />
                            </Col>
                            <Col md="6">
                                <input placeholder="password" onChange={e => setLoginPassword(e.target.value)} />
                            </Col>
                        </Row>
                        <Row className="text-center">
                            <Col md="4">
                            </Col>
                            <Col md="4">

                                <Button style={{ width: "100%" }} className="btn" onClick={login}><h4>Submit</h4></Button>
                            </Col>
                            <Col md="4">

                            </Col>
                        </Row>
                        <Row className="text-center">
                            <Col md="12" className="txt" style={{ marginTop: "20px" }}>
                                <h2>Not a Member Yet?</h2>
                            </Col>
                        </Row>
                        <Row className="text-center">
                            <Col md="4">
                            </Col>
                            <Col md="4">
                                <Link to="./SignupForm">
                                    <Button style={{ width: "100%" }} className="btn"><h4>CLICK HERE</h4></Button>
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