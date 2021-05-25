import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import { Button, Row, Container, Col } from 'react-bootstrap';
import API from '../utils/API';
import Contacts from "../components/Contacts";
import Matches from '../components/Matches';
import Navbar from '../components/nav-bar';
import UserContext from '../contexts/userProvider';
import './style.css';
import Background from "../components/background/background.mp4"

// Begin Home Component
export default function Home() {
    // Get user data from login
    const { userData } = useContext(UserContext)

    // Set data for use in functions
    const [contacts, setContacts] = useState(["Test1", "Test2", "Test3"])
    const [matches, setMatches] = useState(["Test4", "Test5", "Test6"])
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
        console.log("I'm saveContact ", saveContact.matchName)
        if (contacts.includes(saveContact.matchId)) {
            alert("You have this one")
        } else {
            API.saveContact(saveContact)
                .then(response => {
                    console.log("saved contact ", response.data)
                    setContacts(prevContacts => {
                        return [...prevContacts, response]
                    })
                })
        }
    }


    const findMatches = (userData) => {

        API.findMatches(userData)
            .then(response => {
                setMatches(response.data)
            })
    }
    // const blockUser = (userData, blockId) => {
    //     console.log("in home ", userData)
    //     API.blockUser(userData._id)
    //         .then(response => {
    //             setContacts(response.data.myConnections)
    //             console.log(response.data.myConnections)
    //             console.log(contacts, " did it set")
    //         })
    // }


    return (
        <Container className="container rounded ">
            <Navbar />
            <video
            autoPlay
            loop
            muted
            style={{
                position: "absolute",
                width: "100%",
                left: "50%",
                top: "50%",
                height: "100%",
                objectFit: "cover",
                transform: "translate (-50%, -50%)",
                zIndex: "-1"

            }}
            >
                <source src={Background} type="video.mp4" />
            </video>
            <Row>

                <Col md="12">
                    <Row className="border rounded mb-5 m-2" >
                        <Col md="12">
                            <div>
                                {contacts ?
                                    <Contacts contacts={contacts} /> :
                                    <div className="home text-center p-5"> Oops, something went wrong</div>}
                                <Row>
                                    <Col md="4"></Col>
                                    <Col md="4" className="mt-6 text-center">
                                        <Link to="/dashboard" params={{ contacts: contacts, Id: userId }} className="rounded-2 p-2 mb-4 btn text-center" >
                                            <h4 className="text-center">Continue Chatting</h4>
                                        </Link>
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