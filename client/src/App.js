import React, { useState } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { ProfileList, ProfileListItem } from "./components/ProfileList";
import { Container, Row, Col } from "./components/Grid";

function App() {

  const [profile, setProfile] = useState([]);
  const [profileSearch, setProfileSearch] = useState("");

  const handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    setProfileSearch(value);
  };

  const handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getRecipes(profileSearch)
      .then(res => {
        console.log("I am api" + res.data)
        setRecipes(res.data)
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <Nav />
      <Jumbotron />
      <Container>
        <Row>
          <Col size="md-12">
            <form>
              <Container>
                <Row>
                  <Col size="xs-9 sm-10">
                    <Input
                      name="profileSearch"
                      value={profileSearch}
                      onChange={handleInputChange}
                      placeholder="Search For a Recipe"
                    />
                  </Col>
                  <Col size="xs-3 sm-2">
                    <Button
                      onClick={handleFormSubmit}
                      type="success"
                      className="input-lg"
                    >
                      Search
                    </Button>
                  </Col>
                </Row>
              </Container>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="xs-12">
            <h1>Recipes</h1>
            <ProfileList >
              {recipes.map((recipe, index) => {
                return (

                  <ProfileListItem recipe={recipe} key={index} />

                )

              })
              }
            </ProfileList>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


export default App;



{/* row one - SSC & ICS */ }
<div className="row">
  <div className="col-md-6">
    <Card card={Images[0]} />
  </div>
  <div className="col-md-6">
    <Card card={Images[1]} />
  </div>
  {/* </div> */}
  {/* row two - JES & IO */}
  {/* <div className="row"> */}
  <div className="col-md-6">
    <Card card={Images[4]} />
  </div>
  <div className="col-md-6">
    <Card card={Images[2]} />
  </div>
  {/* </div> */}
  {/* row 3 - WDA &  BEA*/}
  {/* <div className="row"> */}
  <div className="col-md-6">
    <Card card={Images[5]} />
  </div>
  <div className="col-md-6">
    <Card card={Images[3]} />
  </div>
</div>
