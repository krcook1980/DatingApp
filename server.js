const express = require("express");
const app = express();

const apiRoutes = require("./routes");

const mongoose = require("mongoose");

const io = require('socket.io')(5000);

const PORT = process.env.PORT || 3001;

// Define middleware here
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


app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});


io.on('connection', socket => {
  const id = socket.handshake.query.id
  socket.join(id)

  socket.on('send-message', ({recipients, text}) => {
    recipients.forEach(recipient => {
      const newRecipients = recipient.filter(r !== recipient)
      newRecipients.push(id)
      socket.broadcast.to(recipient).emit('receive-message', {
        recipients: newRecipients, sender: id, text
      })
    })
  })
})
