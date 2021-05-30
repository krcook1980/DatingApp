import React from 'react';
import { ListGroup, Button, Col, Row } from 'react-bootstrap';


export default function Contacts({ contacts, saveBlockContact }) {

  return (
    <>
      <Row >
        <Col md="2" className="text-center home pt-2">

        </Col>
        <Col md="8">
          <h3 className="text-center home mt-2 p-3 " > My Current Connections</h3>
        </Col>
        <Col md="2" className="text-center home pt-2">

        </Col>
      </Row>
      <Row >
        <Col md="12" >
          <div className="text-center">

            <ListGroup variant="flush" style={{ background: 'transparent' }}>
              {contacts.map((contact, index) => (
                <ListGroup.Item key={index} style={{ background: 'transparent' }}>
                  <Row className="text-center home">
                    <Col md="6">
                      <h4 className="pt-3">{contact.name}</h4>
                    </Col>
                    <Col md="6">
                      <Button className="rounded-2 m-2 d-flex" onClick={() => saveBlockContact(contact)}>
                         Remove Contact
                     </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </Col>
      </Row>
    </>
  )
}