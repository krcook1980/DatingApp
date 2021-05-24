import React from 'react';
import { ListGroup, Button, Col, Row } from 'react-bootstrap';
import Tada from '../Tada'

export default function Matches({ matches, saveContact }) {
  
  return (
    <>
      <Row >
        <Col md="3" className="text-center home pt-2">
          <Tada />
        </Col>
        <Col md="6">
          <h3 className="text-center home mt-2 p-3 " > My New Matches</h3>
        </Col>
        <Col md="3" className="text-center home pt-2">
          <Tada />
        </Col>
      </Row>
      <Row >
        <Col md="12" >

          <div className="text-center">

            <ListGroup variant="flush">
              {matches.map((match, index) => (
                <ListGroup.Item key={index}>
                  <Row>
                    <Col md="6">
                      <h4 className="pt-3">{match.username}</h4>
                      <p>{match.gender} ◈ {match.age}</p>
                    </Col>
                    <Col md="6">
                      <Button
                        className="rounded-2 m-2 d-flex btn"
                        id={match._id}
                        name={match.username}
                        onClick={() => saveContact(match)}
                      >
                        Start an epic conversation
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