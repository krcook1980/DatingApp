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
    
    <Container>
    <Form>
      <header className="settingsHeader">Settings</header>
        <Col md>
        <Form.Group as={Row} controlId="formPlaintextUserName">
    <Form.Label column sm="2">
      User Name:
    </Form.Label>
    <Col sm="10">
      <Form.Control plaintext readOnly defaultValue="...testUsername" />
    </Col>
  </Form.Group>
        <Form.Row>
        <Col>
        <Form.Label>First Name</Form.Label>
          <Form.Control placeholder="..." />
        </Col>
        <Col>
        <Form.Label>Last Name</Form.Label>
        <Form.Control  placeholder="..." />
          </Col>
          </Form.Row>
          
          <Form.Row>
          <Form.Group as={Col} controlId ="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control />
          </Form.Group>

          
          <Form.Group as={Col} controlId ="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control />
          </Form.Group>
          </Form.Row>
          
          <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Age</Form.Label>
            <Form.Control/>
          </Form.Group>

          
          <Form.Group as={Col}>
            <Form.Label>Gender</Form.Label>
            <Form.Control as="select" custom >
            <option>Male</option>
            <option>Female</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} >
            <Form.Label>Looking For</Form.Label>
            <Form.Control as="select" custom >
            <option>Female</option>
            <option>Male</option>
            </Form.Control>
          </Form.Group>
          </Form.Row>
          
         
          <Form.Row>
            <Form.Group as={Col} >
            <Form.Label>Vacation Preference</Form.Label>
            <Form.Control as="select" custom >
            <option>userSelection</option>
            <option>....</option>
            <option>....</option>
            <option>....</option>
            </Form.Control>
            </Form.Group>

            <Form.Group as={Col} >
            <Form.Label>Pet Preference</Form.Label>
            <Form.Control as="select" custom >
            <option>userSelection</option>
            <option>....</option>
            <option>....</option>
            <option>....</option>
            </Form.Control>
            </Form.Group>

            <Form.Group as={Col} >
            <Form.Label>Snack Preference</Form.Label>
            <Form.Control as="select" custom >
            <option>userSelection</option>
            <option>....</option>
            <option>....</option>
            <option>....</option>
            </Form.Control>
            </Form.Group>
            </Form.Row>
          
        

        <Form.Row>
          
            <Form.Group as={Col} >
            <Form.Label>Activity Preference</Form.Label>
            <Form.Control as="select" custom >
            <option>userSelection</option>
            <option>....</option>
            <option>....</option>
            <option>....</option>
            </Form.Control>
            </Form.Group>

            <Form.Group as={Col} >
            <Form.Label>Your Personality</Form.Label>
            <Form.Control as="select" custom >
            <option>userSelection</option>
            <option>....</option>
            <option>....</option>
            <option>....</option>
            </Form.Control>
            </Form.Group>

            <Form.Group as={Col} >
            <Form.Label>Child Preference</Form.Label>
            <Form.Control as="select" custom >
            <option>userSelection</option>
            <option>....</option>
            <option>....</option>
            <option>....</option>
            </Form.Control>
            </Form.Group>
          
        </Form.Row>

        <Form.Row>
          
            <Form.Group as={Col} >
            <Form.Label>Priority Preference</Form.Label>
            <Form.Control as="select" custom >
            <option>userSelection</option>
            <option>....</option>
            <option>....</option>
            <option>....</option>
            </Form.Control>
            </Form.Group>

            <Form.Group as={Col} >
            <Form.Label>Entertainment Preference</Form.Label>
            <Form.Control as="select" custom >
            <option>userSelection</option>
            <option>....</option>
            <option>....</option>
            <option>....</option>
            </Form.Control>
            </Form.Group>

            <Form.Group as={Col} >
            <Form.Label>Alcohol Preference</Form.Label>
            <Form.Control as="select" custom >
            <option>userSelection</option>
            <option>....</option>
            <option>....</option>
            <option>....</option>
            </Form.Control>
            </Form.Group>
          
        </Form.Row>

        <Form.Row>
          
            <Form.Group as={Col} >
            <Form.Label>Priority Preference</Form.Label>
            <Form.Control as="select" custom >
            <option>userSelection</option>
            <option>....</option>
            <option>....</option>
            <option>....</option>
            </Form.Control>
            </Form.Group>

            <Form.Group as={Col} >
            <Form.Label>Entertainment Preference</Form.Label>
            <Form.Control as="select" custom >
            <option>userSelection</option>
            <option>....</option>
            <option>....</option>
            <option>....</option>
            </Form.Control>
            </Form.Group>

            <Form.Group as={Col} >
            <Form.Label>Alcohol Preference</Form.Label>
            <Form.Control as="select" custom >
            <option>userSelection</option>
            <option>....</option>
            <option>....</option>
            <option>....</option>
            </Form.Control>
            </Form.Group>
          
        </Form.Row>

        </Col>
      
      {/* <Form.Row>
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
      </Form.Row> */}

      <Form.Row>
        <Col>
          <Button>Save</Button>
        </Col>
      </Form.Row>
      
    </Form>
    </Container>
  );
}


export default SettingsForm;

