import React, { useState, useEffect, useContext } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { Form, Container, Col, Row, Button } from 'react-bootstrap';
import NavBar from "../nav-bar"
import UserContext from "../../contexts/userProvider";
import API from '../../utils/API';
import "../../App.css"
// import heart from '../assets/heart.png';
// import { slideInUp } from "react-animations";
// import styled, { keyframes } from 'styled-components';

import { useHistory } from "react-router-dom";

function SettingsForm() {

  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();
  const [profile, setProfile] = useState();
  const initialFormData = {
    username: "",
    password: "",
    email: "",
    age: "",
    firstName: "",
    lastName: "",
    gender: "",
    looking: "",
    vacation: "",
    animals: "",
    flavor: "",
    activity: "",
    personality: "",
    family: "",
    priorities: "",
    entertainment: "",
    alcohol: "",
    religion: ""
  
  };
Object.freeze(initialFormData);

  const handleSubmit = (e) => {
    
    e.preventDefault();
    setProfile({
      ...formData,
      
    });
  }

  const [formData, updateFormData] = useState({
    // ...initialFormData,
  });

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    profile && updateUser()
  }, [profile])

  const updateUser = () => {
    console.log("I am update ", profile)
    // API.updateUser(profile).then(res => {
    //     setUserData(res.data)
    //     history.push("/home")
    // })
  }

  


  return (
    
    <Container>
      <NavBar />
      <Form onSubmit={handleSubmit}>
      <header className="settingsHeader">Settings</header>
      
      <Col md >

        <Form.Row>
        <Form.Group as={Col} controlId="formUserName">
        <Form.Label >
          User Name:
        </Form.Label>       
        <Form.Control readOnly placeholder={userData.username} value={formData.username}
              onChange={handleChange} />
      
        </Form.Group >

        <Form.Group as={Col} controlId ="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control placeholder={userData.email} value={formData.email}
              onChange={handleChange}/>
            </Form.Group>

            <Form.Group as={Col} controlId ="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control placeholder={userData.password} value={formData.password}
              onChange={handleChange} />
            {/* <Form.Control.Feedback>
            Please Enter a Password.
            </Form.Control.Feedback> */}
           </Form.Group>  
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
          <Form.Label>First Name</Form.Label>
          <Form.Control placeholder={userData.firstName} value={formData.firstName}
              onChange={handleChange}/>
          </Form.Group>

          <Form.Group as={Col}>
          <Form.Label>Last Name</Form.Label>
          <Form.Control  placeholder={userData.lastName}value={formData.lastName}
              onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Age</Form.Label>
            <Form.Control placeholder={userData.age}value={formData.age}
              onChange={handleChange} />
          </Form.Group>
        </Form.Row>
          
        <Form.Row>
         
          
          <Form.Group as={Col}>
            <Form.Label>Gender</Form.Label>
            <Form.Control as="select" custom value={formData.gender} onChange={handleChange} >
            {/* {(event) =>{userData.gender = (event.target.value)}}> */}
            <option>Female</option>
            <option>Male</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} >
            <Form.Label>Looking For</Form.Label>
            <Form.Control as="select" custom value={formData.gender} onChange={handleChange} >
            {/* {(event) =>{userData.gender = (event.target.value)}}> */}
            <option>Female</option>
            <option>Male</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} >
            <Form.Label>Vacation Preference</Form.Label>
            <Form.Control as="select" custom value={formData.vacation} onChange={handleChange} >
            {/* {(event) =>{userData.vacation = (event.target.value)}}> */}
            <option>{userData.vacation}</option>
            <option>Beach</option>
            <option>Camping</option>
            <option>Mountains</option>
            <option>Couch</option>
            </Form.Control>
            </Form.Group>
        </Form.Row>
          
         
        <Form.Row>            

            <Form.Group as={Col} >
            <Form.Label>Pet Preference</Form.Label>
            <Form.Control as="select" custom  value={formData.animals} onChange={handleChange} >
            {/* {(event) =>{userData.animals = (event.target.value)}}> */}
            <option>{userData.animals}</option>
            <option>Love Pets</option>
            <option>Not a fan of Pets</option>
            <option>Allergic</option>
            <option>Love Animals in the Wild</option>
            </Form.Control>
            </Form.Group>

            <Form.Group as={Col} >
            <Form.Label>Snack Flavor Preference</Form.Label>
            <Form.Control as="select" custom value={formData.flavor} onChange={handleChange} >
            {/* {(event) =>{userData.flavor = (event.target.value)}}> */}
            <option>{userData.flavor}</option>
            <option>Sweet</option>
            <option>Salty</option>
            <option>Spicy</option>
            <option>Plain</option>
            </Form.Control>
            </Form.Group>

            <Form.Group as={Col} >
            <Form.Label>Activity Preference</Form.Label>
            <Form.Control as="select" custom value={formData.activity} onChange={handleChange} >
            {/* {(event) =>{userData.activity = (event.target.value)}}> */}
            <option>{userData.activity}</option>
            <option>Always on the Go</option>
            <option>Crossfit or Die</option>
            <option>Gym Rat</option>
            <option>Leave Me Alone</option>
            </Form.Control>
            </Form.Group>

        </Form.Row>   

        <Form.Row>          
            
            <Form.Group as={Col} >
            <Form.Label>Personality Type</Form.Label>
            <Form.Control as="select" custom value={formData.personality} onChange={handleChange} >
            {/* {(event) =>{userData.personality = (event.target.value)}}> */}
            <option>{userData.personality}</option>
            <option value="outgoing">Outgoing</option>
                <option value="reserved">Reserved</option>
                <option value="funny">Funny</option>
                <option value="nerdy">Nerdy</option>
            </Form.Control>
            </Form.Group>

            <Form.Group as={Col} >
            <Form.Label>Child Preference</Form.Label>
            <Form.Control as="select" custom value={formData.family} onChange={handleChange} >
            {/* {(event) =>{userData.family = (event.target.value)}}> */}
            <option>{userData.family}</option>
            <option>Have Kids</option>
            <option>Want Kids</option>
            <option>Prefer no Kids</option>
            <option>Have Kids and want More</option>
            </Form.Control>
            </Form.Group>

            <Form.Group as={Col} >
            <Form.Label>Priority Preference</Form.Label>
            <Form.Control as="select" custom value={formData.priorities} onChange={handleChange} >
            {/* {(event) =>{userData.priorities = (event.target.value)}}> */}
            <option>{userData.priorities}</option>
            <option>Money</option>
            <option>Time</option>
            <option>Respect</option>
            <option>Autonomy</option>
            </Form.Control>
            </Form.Group>          
        </Form.Row>

        <Form.Row>           

            <Form.Group as={Col} >
            <Form.Label>Entertainment Preference</Form.Label>
            <Form.Control as="select" custom value={formData.entertainment} onChange={handleChange} >
            {/* {(event) =>{userData.entertainment = (event.target.value)}}> */}
            <option>{userData.entertainment}</option>
            <option>Movie Theater</option>
            <option>Netflix</option>
            <option>T.V.</option>
            <option>Chill</option>
            </Form.Control>
            </Form.Group>

            <Form.Group as={Col} >
            <Form.Label>Alcohol Preference</Form.Label>
            <Form.Control as="select" custom value={formData.alcohol} onChange={handleChange} >
            {/* {(event) =>{userData.alcohol = (event.target.value)}}> */}
            <option>{userData.alcohol}</option>
            <option>Heavy Drinker</option>
            <option>Moderate Drinker</option>
            <option>Social Drinker</option>
            <option>Don't Drink</option>
            </Form.Control>
            </Form.Group>

              <Form.Group as={Col} >
            <Form.Label>Religeous Preference</Form.Label>
            <Form.Control as="select" custom value={formData.alcohol} onChange={handleChange} >
            {/* {(event) =>{userData.religion = (event.target.value)}}> */}
            <option>{userData.religion}</option>
            <option>Very Religious</option>
            <option>Moderately Religeous</option>
            <option>Not Religeous</option>
            <option>Worship Trees</option>
            </Form.Control>
            </Form.Group>          
        </Form.Row>

        <Form.Row>          
          
        </Form.Row>
        
        {/* <Form.Row>
        <Form.Group as={Col} >
        {['checkbox'].map((type) => (
    <div key={`custom-inline-${type}`} className="mb-3">
    <Form.Check
      custom
      inline
      label="Cooking"
      type={type}
      id={`custom-inline-${type}-Cooking`}
    />        
        </div>
  ))}
</Form.Group>
<Form.Group as={Col} >
        {['checkbox'].map((type) => (
    <div key={`custom-inline-${type}`} className="mb-3">
    <Form.Check
      custom
      inline
      label="Fishing"
      type={type}
      id={`custom-inline-${type}-Fishing`}
    />        
        </div>
  ))}
</Form.Group>
<Form.Group as={Col} >
        {['checkbox'].map((type) => (
    <div key={`custom-inline-${type}`} className="mb-3">
    <Form.Check
      custom
      inline
      label="Camping"
      type={type}
      id={`custom-inline-${type}-Camping`}
    />        
        </div>
  ))}
</Form.Group>
<Form.Group as={Col} >
        {['checkbox'].map((type) => (
    <div key={`custom-inline-${type}`} className="mb-3">
    <Form.Check
      custom
      inline
      label="Reading"
      type={type}
      id={`custom-inline-${type}-Reading`}
    />        
        </div>
  ))}
</Form.Group>
</Form.Row>
<Form.Row>
        <Form.Group as={Col} >
        {['checkbox'].map((type) => (
    <div key={`custom-inline-${type}`} className="mb-3">
    <Form.Check
      custom
      inline
      label="Exercise"
      type={type}
      id={`custom-inline-${type}-Exercise`}
    />        
        </div>
  ))}
</Form.Group>
<Form.Group as={Col} >
        {['checkbox'].map((type) => (
    <div key={`custom-inline-${type}`} className="mb-3">
    <Form.Check
      custom
      inline
      label="Gaming"
      type={type}
      id={`custom-inline-${type}-Gaming`}
    />        
        </div>
  ))}
</Form.Group>
<Form.Group as={Col} >
        {['checkbox'].map((type) => (
    <div key={`custom-inline-${type}`} className="mb-3">
    <Form.Check
      custom
      inline
      label="Computers"
      type={type}
      id={`custom-inline-${type}-Computers`}
    />        
        </div>
  ))}
</Form.Group>
<Form.Group as={Col} >
        {['checkbox'].map((type) => (
    <div key={`custom-inline-${type}`} className="mb-3">
    <Form.Check
      custom
      inline
      label="Tech Drones"
      type={type}
      id={`custom-inline-${type}-Tech Drones`}
    />        
        </div>
  ))}
</Form.Group>
</Form.Row>

<Form.Row>
        <Form.Group as={Col} >
        {['checkbox'].map((type) => (
    <div key={`custom-inline-${type}`} className="mb-3">
    <Form.Check
      custom
      inline
      label="Hiking"
      type={type}
      id={`custom-inline-${type}-Hiking`}
    />        
        </div>
  ))}
</Form.Group>
<Form.Group as={Col} >
        {['checkbox'].map((type) => (
    <div key={`custom-inline-${type}`} className="mb-3">
    <Form.Check
      custom
      inline
      label="Biking"
      type={type}
      id={`custom-inline-${type}-Biking`}
    />        
        </div>
  ))}
</Form.Group>
<Form.Group as={Col} >
        {['checkbox'].map((type) => (
    <div key={`custom-inline-${type}`} className="mb-3">
    <Form.Check
      custom
      inline
      label="Dad Jokes"
      type={type}
      id={`custom-inline-${type}-Dad Jokes`}
    />        
        </div>
  ))}
</Form.Group>
</Form.Row>
         */}
         </Col>
      
      <Form.Row>
        <Col>
          <Button onClick={handleSubmit}>Save</Button>
        </Col>
      </Form.Row>
      
    </Form>
    </Container>
  );
}


export default SettingsForm;