const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/MyDatingApp"
);

const userSeed = [
  {
    username: "CoolGuy420",
    password: "password",
    email: "coolguy420@aol.com",
    age: 69,
    firstName: "Chad",
    lastName: "Bro",
    gender: "Male",
    looking: "Female",
    surveyInfo:
      [{
        vacation: "Ocean",
        animals: "petLover",
        flavor: "Sweet",
        activity: "gymRat",
        personality: "Loud",
        family: "notInterested",
        priorities: "money",
        entertainment: "tv",
        alcohol: "moderateDrinker",
        religion: "religion",
      }],
    biking: true,
    camping: true,
    computers: false,
    cooking: true,
    dadJokes: false,
    exercise: true,
    fishing: true,
    gaming: false,
    hiking: true,
    reading: false,
    techDrones: false,
    myConnections: [],
    blockedUsers: []
  },

  {
    username: "CoolGuy421",
    password: "password",
    email: "coolguy421@aol.com",
    age: 68,
    firstName: "Chad1",
    lastName: "Bro1",
    gender: "Male",
    looking: "Female",
    surveyInfo:
      [{
        vacation: "Ocean",
        animals: "petLover",
        flavor: "Sweet",
        activity: "Outdoors",
        personality: "reserved",
        family: "haveKids",
        priorities: "time",
        entertainment: "movies",
        alcohol: "heavyDrinker",
        religion: "aLittle",
      }],
    biking: false,
    camping: false,
    computers: true,
    cooking: true,
    dadJokes: false,
    exercise: true,
    fishing: false,
    gaming: false,
    hiking: false,
    reading: true,
    techDrones: true,
    myConnections: [],
    blockedUsers: []
  },

  {
    username: "CoolGal420",
    password: "password",
    email: "coolgal420@aol.com",
    age: 67,
    firstName: "Chadette",
    lastName: "Gal",
    gender: "Female",
    looking: 'Male',
    surveyInfo:
      [{
        vacation: "camping",
        animals: "allergic",
        flavor: "sweet",
        activity: "onTheGo",
        personality: "shy",
        family: "notInterested",
        priorities: "Respect",
        entertainment: "netflix",
        alcohol: "socialDrinker",
        religion: "notAtAll",
      }],
    biking: false,
    camping: false,
    computers: false,
    cooking: false,
    dadJokes: false,
    exercise: false,
    fishing: true,
    gaming: false,
    hiking: true,
    reading: true,
    techDrones: true,
    myConnections: [],
    blockedUsers: []
  },
  {
    username: "LameDude801",
    password: "password",
    email: "LameDude801@aol.com",
    age: 66,
    firstName: "John",
    lastName: "Johnson",
    gender: "Male",
    looking: 'Female',
    surveyInfo:
      [{
        vacation: "mountains",
        animals: "notMuch",
        flavor: "spicy",
        activity: "leaveMeAlone",
        personality: "loud",
        family: "notInterested",
        priorities: "Autonomy",
        entertainment: "chill",
        alcohol: "never",
        religion: "notAtAll",
      }],
    biking: false,
    camping: false,
    computers: false,
    cooking: false,
    dadJokes: false,
    exercise: false,
    fishing: true,
    gaming: false,
    hiking: true,
    reading: true,
    techDrones: true,
    myConnections: [],
    blockedUsers: []
  },
  {
    username: "FunGuy385",
    password: "password",
    email: "FunGuy385@aol.com",
    age: 30,
    firstName: "Johna",
    lastName: "Johnson",
    gender: "Female",
    Looking: "Female",
    surveyInfo:
      [{
        vacation: "mountains",
        animals: "petLover",
        flavor: "plain",
        activity: "gymRat",
        personality: "shy",
        family: "haveKids",
        priorities: "money",
        entertainment: "movies",
        alcohol: "moderateDrinker",
        religion: "worshipTrees",
      }],
    biking: true,
    camping: true,
    computers: true,
    cooking: false,
    dadJokes: false,
    exercise: true,
    fishing: false,
    gaming: false,
    hiking: true,
    reading: true,
    techDrones: false,
    myConnections: [],
    blockedUsers: []
  },
  {
    username: "FunGal385",
    password: "password",
    email: "FunGal385@aol.com",
    age: 27,
    firstName: "Sherri",
    lastName: "Johnson",
    gender: "Female",
    looking: "Male",
    surveyInfo:
      [{
        vacation: "couch",
        animals: "outside",
        flavor: "salty",
        activity: "gymRat",
        personality: "shy",
        family: "No",
        priorities: "money",
        entertainment: "movies",
        alcohol: "socialDrinker",
        religion: "aLittle",
      }],
    biking: false,
    camping: false,
    computers: false,
    cooking: false,
    dadJokes: false,
    exercise: false,
    fishing: true,
    gaming: false,
    hiking: true,
    reading: true,
    techDrones: true,
    myConnections: [],
    blockedUsers: []
  },
  {
    username: "SurferBro808",
    password: "password",
    email: "SurferBro808@aol.com",
    age: 25,
    firstName: "Kelly",
    lastName: "Slater",
    gender: "Male",
    looking: "Female",
    surveyInfo:
      [{
        vacation: "mountains",
        animals: "allergic",
        flavor: "sweet",
        activity: "onTheGo",
        personality: "reserved",
        family: "wantKids",
        priorities: "time",
        entertainment: "netflix",
        alcohol: "moderateDrinker",
        religion: "aLittle",
      }],
    biking: true,
    camping: true,
    computers: false,
    cooking: true,
    dadJokes: false,
    exercise: true,
    fishing: true,
    gaming: false,
    hiking: true,
    reading: false,
    techDrones: false,
    myConnections: [],
    blockedUsers: []
  },
  {
    username: "BallBro415",
    password: "password",
    email: "BallBro415@aol.com",
    age: 21,
    firstName: "Steph",
    lastName: "Curry",
    gender: "Male",
    looking: 'Female',
    surveyInfo:
      [{
        vacation: "camping",
        animals: "notMuch",
        flavor: "sweet",
        activity: "crossFit",
        personality: "reserved",
        family: "notInterested",
        priorities: "time",
        entertainment: "tv",
        alcohol: "moderateDrinker",
        religion: "worshipTrees",
      }],
    biking: false,
    camping: true,
    computers: true,
    cooking: false,
    dadJokes: true,
    exercise: true,
    fishing: true,
    gaming: false,
    hiking: true,
    reading: true,
    techDrones: false,
    myConnections: [],
    blockedUsers: []
  },
  {
    username: "PablettePicasa",
    password: "password",
    email: "artist123@aol.com",
    age: 25,
    firstName: "Terry",
    lastName: "Jacobson",
    gender: "Female",
    surveyInfo:
      [{
        looking: 'Male',
        vacation: "ocean",
        animals: "allergic",
        flavor: "salty",
        activity: "onTheGo",
        personality: "loud",
        family: "wantKids",
        priorities: "time",
        entertainment: "netflix",
        alcohol: "heavyDrinker",
        religion: "veryReligious",
      }],
    biking: true,
    camping: true,
    computers: false,
    cooking: true,
    dadJokes: false,
    exercise: true,
    fishing: true,
    gaming: false,
    hiking: true,
    reading: false,
    techDrones: false,
    myConnections: [],
    blockedUsers: []
  },
];


db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
