import React, { useState, useEffect, useContext } from "react";
import API from "../utils/API";
import { useHistory } from "react-router-dom";
import "./style.css";
import UserContext from "../contexts/userProvider";

const initialFormData = {
  username: "",
  password: "",
  email: "",
  age: "",
  firstName: "",
  lastName: "",
  gender: "",
  looking: "",
  vacation: "Ocean",
  animals: "petLover",
  flavor: "salty",
  activity: "leaveMeAlone",
  personality: "loud",
  family: "haveKids",
  priorities: "time",
  entertainment: "chill",
  alcohol: "socialDrinker",
  religion: "notAtAll"

};

const hobbies = {
  cooking: false,
  fishing: false,
  camping: false,
  reading: false,
  exercise: false,
  gaming: false,
  computers: false,
  techDrones: false,
  hiking: false,
  biking: false,
  dadJokes: false,
};

Object.freeze(initialFormData);

// START FROM FUNCTION--------------------
export default function SignupForm() {
  const history = useHistory();
  const { userData, setUserData } = useContext(UserContext)

  const [formData, updateFormData] = useState({
    ...initialFormData,
  });

  const [profile, setProfile] = useState();

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [checkData, updateCheckData] = useState({
    ...hobbies,
  });

  const boxChange = (e) => {
    updateCheckData({
      ...checkData,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile({
      ...formData,
      ...checkData,
    });
  }
 
  // API Call
  const createUser = async () => {
   
    API.createUser(profile)
      .then(res => {
      
        setUserData(res.data)
           history.push("/home")
      })
      .catch(err => console.log(err))
  };

  useEffect(() => {
    profile && createUser()
  }, [profile])

  return (
    <div className="container col-6 border mt-4 text-center rounded background-info">
      <form action="" encType="multipart/form-data" onSubmit={handleSubmit}>
        <label className="mt-4 heading">
          <h2>Sign Up To Make A New Friend Or Maybe More!</h2>
        </label>

        <div className="container border mt-4">
          <div className="row">
            <div className="col-md-6 p-4">
              <label htmlFor="username">Username</label>
            </div>
            <div className="col-md-6 p-4">
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                required
                value={formData.username}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mt-4">


          </div>

          <div className="mt-4">
            <div className="row">
              <div className="col-md-6 p-4">
                <label htmlFor="username">Password</label>
              </div>
              <div className="col-md-6 p-4">
                <input
                  type="text"
                  name="password"
                  id="password"
                  placeholder="create a password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>


          </div>

          <div>
            <div className="row">
              <div className="col-md-6 p-4">
                <label htmlFor="email">Email</label>
              </div>
              <div className="col-md-6 p-4">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>


          </div>

          <div>
            <div className="row">
              <div className="col-md-6 p-4">
                <label htmlFor="age">Age</label>
              </div>
              <div className="col-md-6 p-4">
                <input
                  type="number"
                  name="age"
                  id="age"
                  min="18"
                  step="1"
                  placeholder="Age"
                  value={formData.age}
                  onChange={handleChange}
                />
              </div>
            </div>


          </div>

          <div>
            <div className="row">
              <div className="col-md-6 p-4">
                <label htmlFor="firstName">First Name</label>
              </div>
              <div className="col-md-6 p-4">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
            </div>


          </div>

          <div>
            <div className="row">
              <div className="col-md-6 p-4">
                <label htmlFor="lastName">Last Name</label>
              </div>
              <div className="col-md-6 p-4">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>


          </div>

          <div>
            <div className="row">
              <div className="col-md-6 p-4">
                <label htmlFor="gender">I am a ...</label>
              </div>
              <div className="col-md-6 p-4">
                <select name="gender" id="gender" onChange={handleChange}>
                  <option value="">Choose one</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>


          </div>
          <div>
            <div className="row">
              <div className="col-md-6 p-4">
                <label htmlFor="looking">Looking for a ...</label>
              </div>
              <div className="col-md-6 p-4">
                <select name="looking" id="looking" onChange={handleChange}>
                  <option value="">Choose one</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>


          </div>
        </div>
        <div>
          <label className="heading" htmlFor="pickOne"><h2>If you had to Pick One:</h2></label>

          <div className="container border">
            <div>
              <div className="row">
                <div className="col-md-6 p-4">
                  <label htmlFor="vacation">What's your ideal get-away?</label>
                </div>
                <div className="col-md-6 p-4">
                  <select name="vacation" id="vacation" onChange={handleChange}>
                    <option value="">Choose one</option>
                    <option value="ocean">Ocean</option>
                    <option value="camping">Camping</option>
                    <option value="city">City</option>
                    <option value="home">Staycation</option>
                  </select>
                </div>
              </div>


            </div>

            <div>
              <div className="row">
                <div className="col-md-6 p-4">
                  <label htmlFor="animals">How do you feel about pets?</label>
                </div>
                <div className="col-md-6 p-4">
                  <select name="animals" id="animals" onChange={handleChange}>
                    <option value="">Choose one</option>
                    <option value="dog">Dogs</option>
                    <option value="cat">Cats</option>
                    <option value="other">Love them all</option>
                    <option value="nope">Not for me</option>
                  </select>
                </div>
              </div>


            </div>

            <div>
              <div className="row">
                <div className="col-md-6 p-4">
                  <label htmlFor="flavor">Favorite snack flavor?</label>
                </div>
                <div className="col-md-6 p-4">
                  <select name="flavor" id="flavor" onChange={handleChange}>
                    <option value="">Choose one</option>
                    <option value="sweet">Sweet</option>
                    <option value="salty">Salty</option>
                    <option value="spicy">Spicy</option>
                    <option value="plain">Plain</option>
                  </select>
                </div>
              </div>


            </div>

            <div>
              <div className="row">
                <div className="col-md-6 p-4">
                  <label htmlFor="activity">How do you like to stay active?</label>
                </div>
                <div className="col-md-6 p-4">
                  <select name="activity" id="activity" onChange={handleChange}>
                    <option value="">Choose one</option>
                    <option value="onTheGo">Always On The Go</option>
                    <option value="outdoors">Anything outdoors</option>
                    <option value="gymRat">Gym Rat</option>
                    <option value="leaveMeAlone">Leave Me Alone</option>
                  </select>
                </div>
              </div>


            </div>

            <div>
              <div className="row">
                <div className="col-md-6 p-4">
                  <label htmlFor="personality">
                    How would others describe you?
              </label>
                </div>
                <div className="col-md-6 p-4">
                  <select
                    name="personality"
                    id="personality"
                    onChange={handleChange}>
                    <option value="">Choose one</option>
                    <option value="outgoing">Outgoing</option>
                    <option value="reserved">Reserved</option>
                    <option value="funny">Funny</option>
                    <option value="nerdy">Nerdy</option>
                  </select>
                </div>
              </div>


            </div>

            <div>
              <div className="row">
                <div className="col-md-6 p-4">
                  <label htmlFor="family">How do you feel about children</label>
                </div>
                <div className="col-md-6 p-4">
                  <select name="family" id="family" onChange={handleChange}>
                    <option value="">Choose one</option>
                    <option value="haveKids">Have Kids</option>
                    <option value="wantKids">Want Kids</option>
                    <option value="notInterested">Prefer No Children</option>
                    <option value="wantMore">Have Kids, Want More.</option>
                  </select>
                </div>
              </div>


            </div>

            <div>
              <div className="row">
                <div className="col-md-6 p-4">
                  <label htmlFor="priorities">
                    Which is more important to you?
              </label>
                </div>
                <div className="col-md-6 p-4">
                  <select name="priorities" id="priorities" onChange={handleChange}>
                    <option value="">Choose one</option>
                    <option value="money">Money</option>
                    <option value="time">Time</option>
                    <option value="respect">Respect</option>
                    <option value="autonomy">Autonomy</option>
                  </select>
                </div>
              </div>


            </div>

            <div>
              <div className="row">
                <div className="col-md-6 p-4">
                  <label htmlFor="entertainment">
                    Which sounds more entertaining?
              </label>
                </div>
                <div className="col-md-6 p-4">
                  <select
                    name="entertainment"
                    id="entertainment"
                    onChange={handleChange}
                  >
                    <option value="">Choose one</option>
                    <option value="movies">Dinner and a Movie</option>
                    <option value="outside">Do something Outside</option>
                    <option value="music">Go to a Concert</option>
                    <option value="club">Hit the Club</option>
                  </select>
                </div>
              </div>


            </div>

            <div>
              <div className="row">
                <div className="col-md-6 p-4">
                  <label htmlFor="alcohol">How often do you drink?</label>
                </div>
                <div className="col-md-6 p-4">
                  <select name="alcohol" id="alcohol" onChange={handleChange}>
                    <option value="">Choose one</option>
                    <option value="heavyDrinker">Heavy Drinker</option>
                    <option value="moderateDrinker">Moderate Drinker</option>
                    <option value="socialDrinker">Social Drinker</option>
                    <option value="never">Never</option>
                  </select>
                </div>
              </div>


            </div>

            <div>
              <div className="row">
                <div className="col-md-6 p-4">
                  <label htmlFor="religion">How religious are you?</label>
                </div>
                <div className="col-md-6 p-4">
                  <select name="religion" id="religion" onChange={handleChange}>
                    <option value="">Choose one</option>
                    <option value="veryReligious">Very Religious</option>
                    <option value="aLittle">Moderately Religious</option>
                    <option value="worshipTrees">Worship Trees</option>
                    <option value="notAtAll">Not Even A Little</option>
                  </select>
                </div>
              </div>


            </div>
          </div>

          <div>
            <h2 className="heading">Check All That Apply</h2>
            <div className="container border">
              <div className="row">
                <div className="col-md-6 p-4">

                  <div>
                    <label htmlFor="cooking">Cooking</label>
                    <input
                      type="checkbox"
                      name="cooking"
                      id="cooking"
                      onChange={boxChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="fishing">Fishing</label>
                    <input
                      type="checkbox"
                      name="fishing"
                      id="fishing"
                      onChange={boxChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="camping">Camping</label>
                    <input
                      type="checkbox"
                      name="camping"
                      id="camping"
                      onChange={boxChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="reading">Reading</label>
                    <input
                      type="checkbox"
                      name="reading"
                      id="reading"
                      onChange={boxChange}
                    />
                  </div>


                  <div>
                    <label htmlFor="exercise">Exercise</label>
                    <input
                      type="checkbox"
                      name="exercise"
                      id="exercise"
                      onChange={boxChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="gaming">Gaming</label>
                    <input
                      type="checkbox"
                      name="gaming"
                      id="gaming"
                      onChange={boxChange}
                    />
                  </div>
                </div>
                <div className="col-md-6 p-4">
                  <div>
                    <label htmlFor="computers">Computers</label>
                    <input
                      type="checkbox"
                      name="computers"
                      id="computers"
                      onChange={boxChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="tech-drones">Tech/Drones</label>
                    <input
                      type="checkbox"
                      name="techDrones"
                      id="tech-drones"
                      onChange={boxChange}
                    />
                  </div>


                  <div>
                    <label htmlFor="hiking">Hiking</label>
                    <input

                      type="checkbox"
                      name="hiking"
                      id="hiking"
                      onChange={boxChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="biking">Biking</label>
                    <input
                      type="checkbox"
                      name="biking"
                      id="biking"
                      onChange={boxChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="dadJokes">Dad Jokes</label>
                    <input
                      type="checkbox"
                      name="dadJokes"
                      id="dadJokes"
                      onChange={boxChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="cars">Cars/Motorcycles</label>
                    <input
                      type="checkbox"
                      name="cars"
                      id="cars"
                    // onChange={boxChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="btn btn-primary mt-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
