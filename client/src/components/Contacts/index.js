import React from 'react';
import { ListGroup, Button, Col, Row } from 'react-bootstrap';


export default function Contacts({contacts, handleChatClick, saveContact}) {
  console.log("I am in in contact form ", contacts.contacts)
  return (
    <>
      <h3 className="text-center" style={{color:"#2874A6"}}> My Current Contacts</h3>
      <div className="text-center">
        
          <ListGroup variant="flush">
            {contacts.map((contact, index) => (
              <ListGroup.Item key={index}>
                <Row>
                <Col md="6">
                  <h4 className="pt-3">{contact}</h4>
                </Col>
                <Col md="6">
                  <Button
                    className="rounded-2 m-2 d-flex"
                    id={contact}
                    style={{
                      background: "#5DADE2",
                  }}
                    onClick={() => handleChatClick(saveContact)}>
                    Open Conversation
                </Button>
                </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
      </div>
    </>
  )
}