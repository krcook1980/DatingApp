const express = require('express');
const app = express();

const apiRoutes = require("./routes");

const io = require('socket.io').listen(app);
const server = require('http').createServer();

const mongoose = require("mongoose");
const db = require('./models')

const PORT = process.env.PORT || 3001;

// PASSPORT STUFF ADDED ---------------
const cors = require('cors')
const passport = require('passport')
const session =  require('express-session');
const path = require ("path")

app.use(cors({
  origin: "https://love-is-blind.herokuapp.com/",
  credentials: true
}))

  const MemoryStore = require('memorystore')(session)
  
  app.use(session({
    cookie: { maxAge: 86400000 },
    store: new MemoryStore({
      checkPeriod: 86400000 // prune expired entries every 24h
    }),
    resave: false,
    secret: 'keyboard cat'
  }))

//passport middleware
app.use(passport.initialize());
app.use(passport.session())
require('./passportConfig')(passport)

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build"));

}

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb+srv://root:passw0rd@cluster0.hmmp4.mongodb.net/MyDatingApp?retryWrites=true&w=majority",
  { useNewUrlParser: true,
    useUnifiedTopology: true
  },
  ()=>{console.log("Mongoose is Connected")}
  
);

// Define express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

//Whenever someone connects to chat this gets executed
io.on('connection', function(socket) {
 
  const id = socket.handshake.query.id
  
  socket.join(id)
  console.log('A user connected', id);
  
  socket.on('send-message', ({recipients, text})=>{
    console.log("message to send in socket on server ", text)
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

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname,"./client/build/index.html"))
})

app.listen(PORT, function() {
  console.log(`Server now listening on https://localhost:3001`)
})