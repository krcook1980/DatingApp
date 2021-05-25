import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { useHistory } from "react-router-dom";
import "./style.css";

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

export default function SignupForm() {
  const history = useHistory();

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
  console.log(profile, "I am profile");
  // API Call
  const createUser = async () => {
    console.log(profile, " in form side")
    API.createUser(profile)
      .then(result => {
        console.log(result)
        history.pushState("/home")
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
          <div className="mt-4">
            <label htmlFor="username">Username</label>
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

          <div className="mt-4">
            <label htmlFor="username">Password</label>
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

          <div>
            <label htmlFor="email">Email</label>
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

          <div>
            <label htmlFor="age">Age</label>
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

          <div>
            <label htmlFor="firstName">First Name</label>
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

          <div>
            <label htmlFor="lastName">Last Name</label>
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

          <div>
            <label htmlFor="gender">I am a ...</label>
            <select name="gender" id="gender" onChange={handleChange}>
              <option value="">Choose one</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div>
            <label htmlFor="looking">Looking for a ...</label>
            <select name="looking" id="looking" onChange={handleChange}>
              <option value="">Choose one</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>
        <div>
          <label className="heading" htmlFor="pickOne"><h2>If you had to Pick One:</h2></label>

          <div className="container border">
            <div>
              <label htmlFor="vacation">What's your ideal get-away?</label>
              <select name="vacation" id="vacation" onChange={handleChange}>
                <option value="">Choose one</option>
                <option value="ocean">Ocean</option>
                <option value="camping">Camping</option>
                <option value="city">City</option>
                <option value="home">Staycation</option>
              </select>
            </div>

            <div>
              <label htmlFor="animals">How do you feel about pets?</label>
              <select name="animals" id="animals" onChange={handleChange}>
                <option value="">Choose one</option>
                <option value="dog">Dogs</option>
                <option value="cat">Cats</option>
                <option value="other">Love them all</option>
                <option value="nope">Not for me</option>
              </select>
            </div>

            <div>
              <label htmlFor="flavor">Favorite snack flavor?</label>
              <select name="flavor" id="flavor" onChange={handleChange}>
                <option value="">Choose one</option>
                <option value="sweet">Sweet</option>
                <option value="salty">Salty</option>
                <option value="spicy">Spicy</option>
                <option value="plain">Plain</option>
              </select>
            </div>

            <div>
              <label htmlFor="activity">How do you like to stay active?</label>
              <select name="activity" id="activity" onChange={handleChange}>
                <option value="">Choose one</option>

                <option value="onTheGo">Always On The Go</option>
                <option value="outdoors">Anything outdoors</option>
                <option value="gymRat">Gym Rat</option>
                <option value="leaveMeAlone">Leave Me Alone</option>
              </select>
            </div>

            <div>
              <label htmlFor="personality">
                How would others describe you?
              </label>
              <select
                name="personality"
                id="personality"
                onChange={handleChange}
              >
                <option value="">Choose one</option>
                <option value="outgoing">Outgoing</option>
                <option value="reserved">Reserved</option>
                <option value="funny">Funny</option>
                <option value="nerdy">Nerdy</option>
              </select>
            </div>

            <div>
              <label htmlFor="family">How do you feel about children</label>
              <select name="family" id="family" onChange={handleChange}>
                <option value="">Choose one</option>
                <option value="haveKids">Have Kids</option>
                <option value="wantKids">Want Kids</option>
                <option value="notInterested">Prefer No Children</option>
                <option value="wantMore">Have Kids, Want More.</option>
              </select>
            </div>

            <div>
              <label htmlFor="priorities">
                Which is more important to you?
              </label>
              <select name="priorities" id="priorities" onChange={handleChange}>
                <option value="">Choose one</option>
                <option value="money">Money</option>
                <option value="time">Time</option>
                <option value="Respect">Respect</option>
                <option value="Autonomy">Autonomy</option>
              </select>
            </div>

            <div>
              <label htmlFor="entertainment">
                Which sounds more entertaining?
              </label>
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

            <div>
              <label htmlFor="alcohol">How often do you drink?</label>
              <select name="alcohol" id="alcohol" onChange={handleChange}>
                <option value="">Choose one</option>
                <option value="heavyDrinker">Heavy Drinker</option>
                <option value="moderateDrinker">Moderate Drinker</option>
                <option value="socialDrinker">Social Drinker</option>
                <option value="never">Never</option>
              </select>
            </div>

            <div>
              <label htmlFor="religion">How religious are you?</label>
              <select name="religion" id="religion" onChange={handleChange}>
                <option value="">Choose one</option>
                <option value="veryReligious">Very Religious</option>
                <option value="aLittle">Moderately Religious</option>
                <option value="worshipTrees">Worship Trees</option>
                <option value="notAtAll">Not Even A Little</option>
              </select>
            </div>
          </div>

          <div>
            <p className="heading"><h2>Check All That Apply</h2></p>
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
