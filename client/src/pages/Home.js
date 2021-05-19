import React, {useState, useEffect} from 'react';
import {Button, Row, Container, Col} from 'react-bootstrap';
import API from '../utils/API';

export default function Home() {
    // const [match, setMatch] = useState([]);
    // login should setstate userid
    
  

    const userId = '60a2cdb0745bca35843bedb2';
    const [contacts, setContacts] = useState([])
    const [user, setUser] = useState({
        username: "CoolGal420",
        id: "60a2cdb0745bca35843bedb2",
        email: "coolgal420@aol.com",
        age: 67,
        gender: "Female"
    })

    const saveContact = {
        userId: userId,
        name: 'ThisGuy420'
                        }
  

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
    
    const getContactList = (userId) => {
        console.log("in home ", userId)
        API.getContactList(userId)
        .then(response => {
            setContacts(response.data)
            console.log(response.data, "back")
            console.log(contacts, " did it set")
        })
    }
    

    return (
        <Container>
            <Row className="border mb-5">
            <h3> My Current Contacts</h3>
            <div>
                <ul>
                {contacts.map(contact => (
                    <li>{contact}</li>
                    )
                    )}
                    </ul>
            </div>
            </Row>
            <Row className="border mb-5">
                <Col md="6">
                <h3>My Matches</h3>
                </Col>
                <Col md="6">
                <div>
                <p>Name: {saveContact.name} 
                     {/* <Link to='/Dashboard'>  */}
            <Button
             className="rounded-0 m-2 d-flex"
             onClick={() => handleChatClick(saveContact)}>
               talk to this person
            </Button> </p> </div></Col>
            {/* </Link> */}
            </Row>
        <div>
           
            
           
            <Button
             className="rounded-0" 
             onClick={() => haveContact(saveContact)}>
               Have this one?
            </Button> 
            <Button
             className="rounded-0 m-2"
             onClick={() => getContactList(userId)}>
              get my contacts
            </Button> 
           


        </div>
        </Container>
    )
}
