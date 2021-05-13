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
    surveyInfo: [{
      vacation: "Beach",
      animals: "Dogs",
      flavor: "Sweet",
      activity: "Outdoors",
      personality: "Boring",
      family: "Yes",
      priorities: "Marriage",
      entertainment: "movies",
      alcohol: "Yes",
      religion: "LDS"
    }],
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
    surveyInfo: [{
      vacation: "Beach",
      animals: "Dogs",
      flavor: "Sweet",
      activity: "Outdoors",
      personality: "Boring",
      family: "Yes",
      priorities: "Marriage",
      entertainment: "movies",
      alcohol: "Yes",
      religion: "LDS"
    }],
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
    surveyInfo: [{
      vacation: "No",
      animals: "Dogs",
      flavor: "Sweet",
      activity: "Inside",
      personality: "Boring",
      family: "No",
      priorities: "Marriage",
      entertainment: "movies",
      alcohol: "No",
      religion: "Catholic"
    }],
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
    surveyInfo: [{
      vacation: "Desert",
      animals: "Cats",
      flavor: "Sour",
      activity: "Inside",
      personality: "Dancing",
      family: "No",
      priorities: "Marriage",
      entertainment: "movies",
      alcohol: "No",
      religion: "Catholic"
    }],
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
    gender: "Male",
    surveyInfo: [{
      vacation: "Snow",
      animals: "Cats",
      flavor: "Sour",
      activity: "Inside",
      personality: "Drink",
      family: "No",
      priorities: "Marriage",
      entertainment: "movies",
      alcohol: "No",
      religion: "Christian"
    }],
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
    surveyInfo: [{
      vacation: "Mountains",
      animals: "Cats",
      flavor: "Sour",
      activity: "Outside",
      personality: "Drink",
      family: "No",
      priorities: "Marriage",
      entertainment: "movies",
      alcohol: "No",
      religion: "Christian"
    }],
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
    surveyInfo: [{
      vacation: "Beach",
      animals: "Cats",
      flavor: "Sour",
      activity: "Outside",
      personality: "Drink",
      family: "No",
      priorities: "Marriage",
      entertainment: "movies",
      alcohol: "No",
      religion: "Christian"
    }],
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
    surveyInfo: [{
      vacation: "Beach",
      animals: "Dogs",
      flavor: "Spicy",
      activity: "Basketball",
      personality: "Drink",
      family: "No",
      priorities: "Marriage",
      entertainment: "movies",
      alcohol: "No",
      religion: "Christian"
    }],
    myConnections: [],
    blockedUsers: []
  }
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
