import React from 'react';
import { ListGroup, Button, Col, Row } from 'react-bootstrap';


export default function Matches({matches, haveContact, saveMatch}) {

  return (
    <>
      <h3 className="text-center" style={{color:"#2874A6"}}> My New Matches</h3>
      <div className="text-center">
        
          <ListGroup variant="flush">
            {matches.map((match, index) => (
              <ListGroup.Item key={index}>
                <Row>
                <Col md="6">
                  <h4 className="pt-3">{match}</h4>
                </Col>
                <Col md="6">
                  <Button
                    className="rounded-2 m-2 d-flex"
                    id={match}
                    style={{
                        background: "#5DADE2",
                    }}
                    onClick={() => haveContact(saveMatch)}>
                    Start an epic conversation
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