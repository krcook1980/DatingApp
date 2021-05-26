import React, { useState, useEffect, useContext } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { Form, Container, Col, Row, Button } from 'react-bootstrap';
import NavBar from "../nav-bar"
import UserContext from "../../contexts/userProvider";
import API from '../../utils/API';
import "../../App.css"
import { useHistory } from "react-router-dom";

function SettingsForm() {

  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();
  const [profile, setProfile] = useState()
  const [formData, updateFormData] = useState({
    // ...initialFormData,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile({
      ...formData,
      
    });
  }

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
    API.updateUser(userData).then(res => {
      console.log(res.data)
        setUserData(res.data)
        history.push("/home")
    })
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
            <Form.Control placeholder="password" value={formData.password}
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
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} >
            <Form.Label>Looking For</Form.Label>
            <Form.Control as="select" custom 
            // value={formData.gender} onChange={handleChange} >
            onChange={(event) =>{userData.gender = (event.target.value)}}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} >
            <Form.Label>Vacation Preference</Form.Label>
            <Form.Control as="select" custom onChange=
            // value={formData.vacation} onChange={handleChange} >
            {(event) =>{userData.vacation = (event.target.value)}}>
            <option>{userData.vacation}</option>
            <option value="ocean">Ocean</option>
            <option value="camping">Camping</option>
            <option value="city">City</option>
            <option value="home">Staycation</option>
            </Form.Control>
            </Form.Group>
        </Form.Row>
          
         
        <Form.Row>            

            <Form.Group as={Col} >
            <Form.Label>Pet Preference</Form.Label>
            <Form.Control as="select" custom  
            // value={formData.animals} onChange={handleChange} >
            onChange={(event) =>{userData.animals = (event.target.value)}}>
            <option>{userData.animals}</option>
            <option value="dog">Dogs</option>
            <option value="cat">Cats</option>
            <option value="other">Love them all</option>
            <option value="nope">Not for me</option>
            </Form.Control>
            </Form.Group>

            <Form.Group as={Col} >
            <Form.Label>Snack Flavor Preference</Form.Label>
            <Form.Control as="select" custom 
            // value={formData.flavor} onChange={handleChange} >
            onChange={(event) =>{userData.flavor = (event.target.value)}}>
            <option>{userData.flavor}</option>
            <option value="sweet">Sweet</option>
            <option value="salty">Salty</option>
            <option value="spicy">Spicy</option>
            <option value="plain">Plain</option>
            </Form.Control>
            </Form.Group>

            <Form.Group as={Col} >
            <Form.Label>Activity Preference</Form.Label>
            <Form.Control as="select" custom 
            // value={formData.activity} onChange={handleChange} >
            onChange={(event) =>{userData.activity = (event.target.value)}}>
            <option>{userData.activity}</option>
            <option value="onTheGo">Always On The Go</option>
            <option value="outdoors">Anything outdoors</option>
            <option value="gymRat">Gym Rat</option>
            <option value="leaveMeAlone">Leave Me Alone</option>
            </Form.Control>
            </Form.Group>

        </Form.Row>   

        <Form.Row>          
            
            <Form.Group as={Col} >
            <Form.Label>Personality Type</Form.Label>
            <Form.Control as="select" custom 
            // value={formData.personality} onChange={handleChange} >
            onChange={(event) =>{userData.personality = (event.target.value)}}>
            <option>{userData.personality}</option>
            <option value="outgoing">Outgoing</option>

            <option value="reserved">Reserved</option>
            <option value="funny">Funny</option>
            <option value="nerdy">Nerdy</option>

            </Form.Control>
            </Form.Group>

            <Form.Group as={Col} >
            <Form.Label>Child Preference</Form.Label>
            <Form.Control as="select" custom 
            // value={formData.family} onChange={handleChange} >
            onChange={(event) =>{userData.family = (event.target.value)}}>
            <option>{userData.family}</option>
            <option value="">Choose one</option>
            <option value="haveKids">Have Kids</option>
            <option value="wantKids">Want Kids</option>
            <option value="notInterested">Prefer No Children</option>
            <option value="wantMore">Have Kids, Want More.</option>
            </Form.Control>
            </Form.Group>

            <Form.Group as={Col} >
            <Form.Label>Priority Preference</Form.Label>
            <Form.Control as="select" custom 
            // value={formData.priorities} onChange={handleChange} >
            onChange={(event) =>{userData.priorities = (event.target.value)}}>
            <option>{userData.priorities}</option>
            <option value="money">Money</option>
            <option value="time">Time</option>
            <option value="respect">Respect</option>
            <option value="autonomy">Autonomy</option>
            </Form.Control>
            </Form.Group>          
        </Form.Row>

        <Form.Row>           

            <Form.Group as={Col} >
            <Form.Label>Entertainment Preference</Form.Label>
            <Form.Control as="select" custom 
            // value={formData.entertainment} onChange={handleChange} >
            onChange={(event) =>{userData.entertainment = (event.target.value)}}>
            <option>{userData.entertainment}</option>
            <option value="movies">Dinner and a Movie</option>
            <option value="outside">Do something Outside</option>
            <option value="music">Go to a Concert</option>
            <option value="club">Hit the Club</option>
            </Form.Control>
            </Form.Group>

            <Form.Group as={Col} >
            <Form.Label>Alcohol Preference</Form.Label>
            <Form.Control as="select" custom 
            // value={formData.alcohol} onChange={handleChange} >
            onChange={(event) =>{userData.alcohol = (event.target.value)}}>
            <option>{userData.alcohol}</option>
            <option value="heavyDrinker">Heavy Drinker</option>
            <option value="moderateDrinker">Moderate Drinker</option>
            <option value="socialDrinker">Social Drinker</option>
            <option value="never">Never</option>
            </Form.Control>
            </Form.Group>

              <Form.Group as={Col} >
            <Form.Label>Religeous Preference</Form.Label>
            <Form.Control as="select" custom 
            // value={formData.alcohol} onChange={handleChange} >
            onChange={(event) =>{userData.religion = (event.target.value)}}>
            <option>{userData.religion}</option>
            <option value="veryReligious">Very Religious</option>
            <option value="aLittle">Moderately Religious</option>
            <option value="worshipTrees">Worship Trees</option>
            <option value="notAtAll">Not Even A Little</option>
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