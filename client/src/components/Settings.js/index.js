import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { Form, Container, Col, Row, Button } from 'react-bootstrap';

function SettingsForm() {
//   const Form.ControlRef = useRef();
//   // replace dispatch with API call.
//   const [_, dispatch] = useTodoContext(); 

//   function handleSubmit(e) {
//     e.preventDefault();
// // set up call to API to populate information
//     dispatch({
//       type: "add",
//       name: Form.ControlRef.current.value
//     });
//     Form.ControlRef.current.value = "";
//   }

  return (
    
    <Container className="settingsForm">
    <Form>
      <header className="settingsHeader"></header>
        <Col md>
        <Form.Row>
        <Col>
          <Form.Control className="container border mt-4" placeholder="First name" />
        </Col>
        <Col>
        <Form.Control className="container border mt-4" placeholder="Last name" />
          </Col>
          </Form.Row>

          <Form.Group>
          <Form.Control className="container border mt-4" plaintext readOnly defaultValue="..username" />
            <Form.Control />
          </Form.Group>

          <Form.Group controlId ="formEmail" className="container border mt-4">
            <Form.Label>Email</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group controlId ="formPassword" className="container border mt-4">
            <Form.Label>Password</Form.Label>
            <Form.Control />
          </Form.Group>
          
          <Form.Group className="container border mt-4">
            <Form.Label>Age</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group className="container border mt-4">
            <Form.Label>Gender</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group className="container border mt-4">
            <Form.Label>Looking For</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group className="container border mt-4">
            <Form.Label>Pet</Form.Label>
            <Form.Control />
          </Form.Group>

        </Col>
      
      {/* <Row>
        <Col>          
          <Button className="settingsBotton">Import</Button>
          <Button className="settingsBotton">Export</Button>
        </Col>
        <Col>
          <Form.Group className="ToggleButton">
            <Form.Label>Allow Registration</Form.Label>
            <ToggleButton />
          </Form.Group>
        </Col>
      </Row> */}

      <Row>
        <Col>
          <Button>Save</Button>
        </Col>
      </Row>
      
    </Form>
  </Container>
  );
}

export default SettingsForm;