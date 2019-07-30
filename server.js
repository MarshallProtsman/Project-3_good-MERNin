const express = require("express");
var mongoose = require("mongoose");
var db = require("./models");
const path = require("path");
const socket = require('socket.io');

require('dotenv').config(); // loading .env and config variables

const PORT = process.env.PORT || 5000;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/LanguageApp";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Define API routes here
app.post("/login", function(req,res) {
  db.user.create(req.body)
  .then(function(dbUser) {
    console.log(dbUser);
  });
});

app.get("/messenger", function(req,res) {
  db.message.find(req.body)
  .then(function(dbMessage) {
    console.log(dbMessage);
  });
});

app.post("/messenger", function(req,res) {
  db.message.create(req.body)
  .then(function(dbMessage) {
    console.log(dbMessage)
  });
});

app.delete("/messenger", function(req,res) {
  db.message.deleteOne(req.body)
  .then(function(dbMessage) {
    console.log(dbMessage);
  });
});

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const server = app.listen(PORT, () => console.log(`server is running on port ${PORT}`));

// ===== BEGIN SOCKET.IO ================================================== //
const io = socket(server); // Socket.io initalize after server loads - mounts on same connection/PORT

// array to manage connected clients
var clients = [];

// event on connection - adds user profile info to the new connection
// adding user properties passed down from app to socket
io.on('connection', (socket) => {
    // grab user info from connection handshake
    socket.userData = socket.handshake.query; // captures user data and attaches to socket/client

    // logs the new connection to server
    console.log(`${socket.userData.userName} (id: ${socket.userData.userID}) has connected.`);

    // push new client into the client array
    clients.push(socket);

    // handle messages and relay to connected clients
    socket.on('SEND_MESSAGE', function (data) {
        console.log(data); // logs message object on receit

        // ===== BEGIN RELAY LOOP ================================================= //
        clients.forEach((client) => {
            // ===== BEGIN GOOGLE TRANSLATE API CALL  ================================= //
            async function main(
                projectId = process.env.GOOGLE_CLOUD_PROJECT_ID
            ) {
                // Imports the Google Cloud client library
                const { Translate } = require('@google-cloud/translate');
                const translate = new Translate({ projectId });

                // The text to translate from message 
                const text = data.message;

                // The target language of each client
                const target = client.userData.target;

                // Translates text into target language
                const [translation] = await translate.translate(text, target);

                // adds translated message to msg object 
                data.translation = translation;

                client.emit('RECEIVE_MESSAGE', data); // relay message to all clients (to be deprecated)
                console.log(`Emitted message to ${client.userData.userName} in target language: ${client.userData.target}.`); // log message relays
            }

            const args = process.argv.slice(2);

            main(...args).catch((err) => {
                console.log(err); // log error for debugging

                data.translation = `Error occured.  Failed to translate: '${data.message}.'`;// send error message to clients
                
                client.emit('RECEIVE_MESSAGE', data); // relay error message to all clients (to be deprecated)
            });
            // ===== END GOOGLE TRANSLATE API CALL  =================================== //
        });
        // ===== END RELAY LOOP =================================================== //
    });

    // handle disconnections
    socket.on('disconnect', function () {
        const i = clients.indexOf(socket); // get index from client array of disconnected client
        const client = clients[i]; // get disconnected client info

        console.log(`${client.userData.userName} (id: ${client.userData.userID}) has disconnected.`);

        clients.splice(i, 1); // remove disconnected client from clients array
    });
})
// ===== END SOCKET.IO ==================================================== //