const express = require("express");
const app = express();

const apiRoutes = require("./routes");

const http = require('http').Server(app);
const io = require('socket.io')(http, {
  cors: {
    origin: '*'
  }
});

const mongoose = require("mongoose");
const db = require('./models')

const PORT = process.env.PORT || 3001;

// PASSPORT STUFF ADDED -----------------------------------------
const cors = require('cors')
const passport = require('passport')
const passportLocal = require('passport-local').Strategy
const cookieParser = require('cookie-parser')
const bcrypt = require('bcryptjs')
const bodyParser=require('body-parser')
const session =  require('express-session');
const User = require("./models");

//passport middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}))
app.use(session({
  secret: "secret",
  resave: true,
  saveUninitialized: true

}))
app.use(cookieParser("secret"))
app.use(passport.initialize());
app.use(passport.session())
require('./passportConfig')(passport)

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/MyDatingApp",
  { useNewUrlParser: true,
    useUnifiedTopology: true
  },
  ()=>{console.log("Mongoose is Connected")}
  
);

app.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) res.send("No User")
      else {
        req.logIn(user, err => {
          if (err) throw err
          res.send(user)
        })
      }
    })(req, res, next)
})

// Use apiRoutes
app.use(apiRoutes);


// Define express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}




//Whenever someone connects to chat this gets executed
io.on('connection', function(socket) {
 
  const id = socket.handshake.query.id
  
  socket.join(id)
  console.log('A user connected', id);
  
  socket.on('send-message', ({recipients, text})=>{
    recipients.forEach(recipient => {
      const newRecipients = recipients.filter(r => r !== recipient)
      newRecipients.push(id)
      socket.broadcast.to(recipient).emit('receive-message', {
        recipients: newRecipients, sender: id, text
      })
    })
  })

  //Whenever someone disconnects from chat this piece of code executed
  socket.on('disconnect', function () {
     console.log('A user disconnected');
  });
});

http.listen(5000, function() {
  console.log('listening on *:5000');
});

app.listen(PORT, function() {
  console.log(`Server now listening on https://localhost:3001`)
})