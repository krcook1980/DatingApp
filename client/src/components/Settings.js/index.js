import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Col, Row } from react-bootstrap

function SettingsForm() {
//   const inputRef = useRef();
//   // replace dispatch with API call.
//   const [_, dispatch] = useTodoContext(); 

//   function handleSubmit(e) {
//     e.preventDefault();
// // set up call to API to populate information
//     dispatch({
//       type: "add",
//       name: inputRef.current.value
//     });
//     inputRef.current.value = "";
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

          <FormGroup>
          <Form.Control className="container border mt-4" plaintext readOnly defaultValue="..username" />
            <Input />
          </FormGroup>

          <FormGroup controlId ="formEmail" className="container border mt-4">
            <Label>Email</Label>
            <Input />
          </FormGroup>

          <FormGroup controlId ="formPassword" className="container border mt-4">
            <Label>Password</Label>
            <Input />
          </FormGroup>
          
          <FormGroup className="container border mt-4">
            <Label>Age</Label>
            <Input />
          </FormGroup>

          <FormGroup className="container border mt-4">
            <Label>Gender</Label>
            <Input />
          </FormGroup>

          <FormGroup className="container border mt-4">
            <Label>Looking For</Label>
            <Input />
          </FormGroup>

          <FormGroup className="container border mt-4">
            <Label>Pet</Label>
            <Input />
          </FormGroup>

        </Col>
      
      {/* <Row>
        <Col>          
          <Button className="settingsBotton">Import</Button>
          <Button className="settingsBotton">Export</Button>
        </Col>
        <Col>
          <FormGroup className="ToggleButton">
            <Label>Allow Registration</Label>
            <ToggleButton />
          </FormGroup>
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
