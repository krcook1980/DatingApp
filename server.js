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

const PORT = process.env.PORT || 3001;

// Define express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Use apiRoutes
app.use(apiRoutes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/MyDatingApp",
  { useNewUrlParser: true }
);


//Whenever someone connects this gets executed
io.on('connection', function(socket) {
  console.log('A user connected');

  //Whenever someone disconnects this piece of code executed
  socket.on('disconnect', function () {
     console.log('A user disconnected');
  });
});

http.listen(5000, function() {
  console.log('listening on *:5000');
});
