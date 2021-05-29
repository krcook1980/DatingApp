import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import { Button, Row, Container, Col } from 'react-bootstrap';
import API from '../utils/API';
import Contacts from "../components/Contacts";
import Matches from '../components/Matches';
import Navbar from '../components/nav-bar';
import UserContext from '../contexts/userProvider';
import './style.css';

// Begin Home Component
export default function Home() {
    // Get user data from login
    const { userData, setUserData } = useContext(UserContext)

    // Set data for use in functions
    const [contacts, setContacts] = useState([])
    const [matches, setMatches] = useState([])
    const [userId, setUserId] = useState("60aaa5e10df345188c1dc60d")
    
   
    //Once context sets, get matches and set contacts
    useEffect(() => {
        setContacts(userData.myConnections)
        findMatches(userData)
        setUserId(userData._id)
    }, [userData])
  
    // Save a match to contacts
    const saveContact = (match) => {

        const saveContact = {
            user: userId,
            matchId: match._id,
            matchName: match.username
        }
            
            API.saveContact(saveContact)
                .then(response => {
                   const thisId = response.data._id 
                   API.getUser(thisId)
                   .then(res => setUserData(res.data) )   
                })
        
    }


    const findMatches = (userData) => {

        API.findMatches(userData)
            .then(response => {
                setMatches(response.data)
            })
    }
  
    return (
        <Container className="container rounded ">
            <Navbar />
            <Row>

                <Col md="12">
                    <Row className="border rounded mb-5 m-2" >
                        <Col md="12">
                            <div>
                                {contacts ?
                                    <Contacts contacts={contacts} /> :
                                    <div className="home text-center p-5"> <h4>Find A Genuine Connection By Adding A Contact</h4></div>}
                                <Row className="mt-4 ">
                                    <Col md="4"></Col>
                                    <Col md="4" className="text-center">
                                        { contacts ? 
                                            <Link to="/dashboard" className="rounded-2 p-2 mb-4 btn text-center">
                                                <h4 className="text-center">Continue Chatting</h4>
                                            </Link>
                                        : ""}
                                    </Col>
                                    <Col md="4"></Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row className="border mb-5 m-2 rounded ">
                        <Col md="12">
                            <Matches
                                matches={matches}
                                saveContact={saveContact}
                            />
                        </Col>
                    </Row>

                </Col>
            </Row>
        </Container>

    )
}