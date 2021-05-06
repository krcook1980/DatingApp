import React from "react";

export default function signupForm() {
  return (
    <form action="" enctype="multipart/form-data">
      <div>
        <label for="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
          required
        />
      </div>

      <div>
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
        />
      </div>

      <div>
        <label for="age">Age</label>
        <input type="number" name="age" min="18" step="1" placeholder="Age" />
      </div>

      <div>
        <label for="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name"
          required
        />
      </div>

      <div>
        <label for="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
          required
        />
      </div>

      <div>
        <label for="gender">Gender</label>
        <select name="gender" id="gender">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="preferNotToSay">Prefer Not To Say</option>
        </select>
      </div>

      <div>
        <label for="pickOne">If you had to Pick One:</label>
        <div>
          <label for="vacation">What's your ideal get-away?</label>
          <select name="vacation" id="vacation">
            <option value="ocean">Ocean</option>
            <option value="camping">Camping</option>
            <option value="mountains">Mountains</option>
            <option value="couch">Couch</option>
          </select>
        </div>

        <div>
          <label for="animals">How do you feel about pets?</label>
          <select name="animals" id="animals">
            <option value="petLover">Love Pets</option>
            <option value="notMuch">Not So Much</option>
            <option value="allergic">Allergic</option>
            <option value="outside">Love Animals In The Wild</option>
          </select>
        </div>

        <div>
          <label for="flavor">How do you like it?</label>
          <select name="flavor" id="flavor">
            <option value="sweet">Sweet</option>
            <option value="salty">Salty</option>
            <option value="spicy">Spicy</option>
            <option value="plain">Plain</option>
          </select>
        </div>

        <div>
          <label for="activity">How do you like to stay active?</label>
          <select name="activity" id="activity">
            <option value="onTheGo">Always On The Go</option>
            <option value="crossFit">Crossfit or Die</option>
            <option value="gymRat">Gym Rat</option>
            <option value="leaveMeAlone">Leave Me Alone</option>
          </select>
        </div>

        <div>
          <label for="personality">How would other describe you?</label>
          <select name="personality" id="personality">
            <option value="loud">Loud</option>
            <option value="reserved">Reserved</option>
            <option value="shy">Shy</option>
            <option value="leaveMeAlone">Leave Me Alone</option>
          </select>
        </div>

        <div>
          <label for="family">How do you feel about children</label>
          <select name="family" id="family">
            <option value="haveKids">Have Kids</option>
            <option value="wantKids">Want Kids</option>
            <option value="notInterested">Prefer No Children</option>
          </select>
        </div>

        <div>
          <label for="priorities">Which is more important to you?</label>
          <select name="priorities" id="priorities">
            <option value="money">Money</option>
            <option value="time">Time</option>
          </select>
        </div>

        <div>
          <label for="entertainment">Which sounds more entertaining?</label>
          <select name="entertainment" id="entertainment">
            <option value="movies">Movie Theater</option>
            <option value="time">Time</option>
            <option value="tv">TV</option>
            <option value="chill">Chill</option>
          </select>
        </div>

        <div>
          <label for="alcohol">How often do you drink?</label>
          <select name="alcohol" id="alcohol">
            <option value="heavyDrinker">Heavy Drinker</option>
            <option value="moderateDrinker">Moderate Drinker</option>
            <option value="socialDrinker">Social Drinker</option>
            <option value="never">Never</option>
          </select>
        </div>

        <div>
          <label for="religion">How religious are you?</label>
          <select name="religion" id="religion">
            <option value="veryReligious">Very Religious</option>
            <option value="aLittle">Moderately Religious</option>
            <option value="worshipTrees">Worship Trees</option>
            <option value="notAtAll">Not Even A Little</option>
          </select>
        </div>

        <div>
          <p>Check All That Apply</p>
          <div>
            <label for="cooking">Cooking</label>
            <input type="checkbox" name="cooking" id="cooking" />
          </div>
          <div>
            <label for="fishing">Fishing</label>
            <input type="checkbox" name="fishing" id="fishing" />
          </div>
          <div>
            <label for="camping">Camping</label>
            <input type="checkbox" name="camping" id="camping" />
          </div>
          <div>
            <label for="reading">Reading</label>
            <input type="checkbox" name="reading" id="reading" />
          </div>
          <div>
            <label for="exercise">Exercise</label>
            <input type="checkbox" name="exercise" id="exercise" />
          </div>
          <div>
            <label for="gaming">Gaming</label>
            <input type="checkbox" name="gaming" id="gaming" />
          </div>
          <div>
            <label for="computers">Computers</label>
            <input type="checkbox" name="computers" id="computers" />
          </div>
          <div>
            <label for="tech-drones">Tech/Drones</label>
            <input type="checkbox" name="tech-drones" id="tech-drones" />
          </div>
          <div>
            <label for="hiking">Hiking</label>
            <input type="checkbox" name="hiking" id="hiking" />
          </div>
          <div>
            <label for="biking">Biking</label>
            <input type="checkbox" name="biking" id="biking" />
          </div>
          <div>
            <label for="dadJokes">Dad Jokes</label>
            <input type="checkbox" name="dadJokes" id="dadJokes" />
          </div>
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
