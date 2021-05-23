import React, { useState, useEffect } from 'react';
import { Button, Row, Container, Col } from 'react-bootstrap';
import { slideInUp } from "react-animations";
import styled, { keyframes } from 'styled-components';
import API from '../utils/API';
import Contacts from "../components/Contacts";
import Matches from '../components/Matches';
import heart from '../assets/heart.png';
import Navbar from '../components/nav-bar';
import { ContactsProvider } from "../contexts/contactsProvider";
import { ConversationProvider } from '../contexts/conversationProvider';
import { SocketProvider } from '../contexts/SocketProvider';
import Dashboard from '../components/Dashboard'

// set animation of hearts
const SlideInUp1 = styled.div`animation: 15s ${keyframes`${slideInUp}`} infinite`;
const SlideInUp2 = styled.div`animation: 10s ${keyframes`${slideInUp}`} infinite`;
const SlideInUp3 = styled.div`animation: 20s ${keyframes`${slideInUp}`} infinite`;
const SlideInUp4 = styled.div`animation: 13s ${keyframes`${slideInUp}`} infinite`;
export default function Home() {
    const userId = '60a938e3b3673759a498f91f';
    const [contacts, setContacts] = useState(["Test1", "Test2", "Test3"])
    const [matches, setMatches] = useState(["Test4", "Test5", "Test6"])
    const [user, setUser] = useState({
        id: "60a938e3b3673759a498f91f",
        username: "CoolGuy420",
        password: "password",
        email: "coolguy420@aol.com",
        age: 69,
        firstName: "Chad",
        lastName: "Bro",
        gender: "Male",
        looking: "Female",
        surveyInfo:
            [{
                vacation: "Ocean",
                animals: "petLover",
                flavor: "Sweet",
                activity: "gymRat",
                personality: "Loud",
                family: "notInterested",
                priorities: "money",
                entertainment: "tv",
                alcohol: "moderateDrinker",
                religion: "religion",
            }],
        biking: true,
        camping: true,
        computers: false,
        cooking: true,
        dadJokes: false,
        exercise: true,
        fishing: true,
        gaming: false,
        hiking: true,
        reading: false,
        techDrones: false,
        myConnections: [],
        blockedUsers: [],
        matches: []
    })
    const saveContact = {
        user: user.id,
        type: "myConnections",
        name: 'testingDATA'
    }

    const surveyInfo = Object.values(user.surveyInfo[0]);

    console.log("this is surveyInfo:", surveyInfo.toString())

    const saveMatch = {
        userId: userId,
        looking: user.looking,
        matchInfo: surveyInfo.toString()
    }

    console.log("This is saveMatch: ", saveMatch)

    const handleChatClick = (saveContact) => {
        console.log("in handle")
        API.saveContact(saveContact)
            .then(response => {
                console.log("saved contact ", response.data)
            })
    }
    const haveContact = (saveContact) => {
        API.haveContact(saveContact)
            .then(response => {
                console.log("then haveContact ", response.data)
            })
    }

    const getUser = (userId) => {
        console.log("in home ", userId)
        API.getContactList(userId)
            .then(response => {
                setContacts(response.data.myConnections)
                console.log(response.data.myConnections)
                console.log(contacts, " did it set")
            })
    }

    const findMatch = (saveMatch) => {
        console.log("in home ", saveMatch, "right?", userId)
        API.findMatches(userId, saveMatch)
            .then(response => {
                setMatches(response.data)
                console.log("reruned from findMatch: ", response.data)
            })
    }
    const dashboard = (
        <SocketProvider Id={userId}>
            <ContactsProvider Id={userId}>
                <ConversationProvider id={userId}>
                    <Dashboard Id={userId} contacts={contacts} />
                </ConversationProvider>
            </ContactsProvider>
        </SocketProvider >
    )
    return (
        <Container>
            <Navbar />
            <Row>
                <Col md="3" className="d-flex" style={{ height: '100vh' }}>
                    <div className="d-flex" style={{ height: '100vh' }}>
                        <SlideInUp1><img src={heart} style={{ width: "20px" }} alt="heart" /></SlideInUp1>
                    </div>
                    <div className="d-flex" style={{ height: '100vh' }}>
                        <SlideInUp2><img src={heart} style={{ width: "50px" }} alt="heart" /></SlideInUp2>
                        <SlideInUp3><img src={heart} style={{ width: "40px" }} alt="heart" /></SlideInUp3>
                    </div>
                    <SlideInUp4><img src={heart} style={{ width: "30px" }} alt="heart" /></SlideInUp4>
                </Col>
                <Col md="9"
                    style={{
                        color: "#5DADE2",
                    }}>
                    <Row className="border mb-5" >
                        <Col md="12">
                            <Contacts
                                contacts={contacts}
                                handleChatClick={handleChatClick}
                                saveContact={saveContact}
                                dashboard={dashboard}
                            />
                        </Col>
                    </Row>
                    <Row className="border mb-5">
                        <Col md="12">
                            <Matches
                                matches={matches}
                                handleChatClick={handleChatClick}
                                saveMatch={saveMatch}
                            />
                        </Col>
                    </Row>
                    <div>
                        <Button
                            className="rounded-0"
                            onClick={() => haveContact(saveContact)}>
                            Have this one?
                    </Button>
                        <Button
                            className="rounded-0 m-2"
                            onClick={() => findMatch(saveMatch)}>
                            get my contacts
                    </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}