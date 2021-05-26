import React from 'react';
import { ListGroup, Button, Col, Row } from 'react-bootstrap';
import Tada from '../Tada';
import './style.css'

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

            <ListGroup variant="flush" style={{ backgroundColor: 'transparent' }}>
              {matches.map((match, index) => (
                <ListGroup.Item key={index} style={{ backgroundColor: 'transparent' }}>
                  <Row>
                    <Col md="6">
                      <h4 className=" home pt-2">{match.username}</h4>
                    </Col>
                    <Col md="6">
                      <Button
                        className="rounded-2 m-2 d-flex btn"
                        id={match._id}
                        name={match.username}
                        onClick={() => saveContact(match)}
                      >
                        Add to My Connections
                  </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6" className="text-left pl-4">

                      <p>◈ I am {match.age} years old.</p>
                      <p>◈ People would say I am {match.personality}.</p>
                      <p>◈ My biggest priority is {match.priorities}.  </p>

                    </Col>
                    <Col md="6" className="text-left pl-4">
                      <p>{match.family === "notInterested" ? "◈ I prefer no children." : "◈ Families are great!"}</p>
                      <p>{match.animals === "nope" ? "◈ Animals are not for me." : "◈ Pets are wonderful!"}</p>
                      <p>{match.activity === "leaveMeAlone" ? "◈ I am not very active." : "◈ Exercise is amazing!"}</p>
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