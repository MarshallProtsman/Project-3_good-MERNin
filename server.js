const express = require("express");
const mongoose = require("mongoose");
const db = require("./models");
const path = require("path");
const socket = require("socket.io");
const app = express();

const { GoogleAuth } = require("google-auth-library");
// heroku re-deploy needs changes
/**
 * Instead of specifying the type of client you'd like to use (JWT, OAuth2, etc)
 * this library will automatically choose the right client based on the environment.
 */
async function main() {
  const auth = new GoogleAuth({
    scopes: "https://www.googleapis.com/auth/cloud-platform"
  });
  const client = await auth.getClient();
  const projectId = await auth.getProjectId();
  const url = `https://www.googleapis.com/dns/v1/projects/${projectId}`;
  const res = await client.request({ url });
  console.log(res.data);
}

main().catch(console.error);
//END GCP CREDS

// loading .env and config variables
require("dotenv").config(); 

const PORT = process.env.PORT || 5000;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve static assets
app.use('/static', express.static(path.join(__dirname, 'client/build/static')));
 //app.use(express.static("public"));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/LanguageApp";

async function dbRun(MONGODB_URI, db) {
  await mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

  await db.user.create({ name: "John", userName: "SpaceSloth", nativeLanguage: "en", targetLanguage: "es", email: "evilevilmonkey@familyguy.com", password: "password1", image: "https://avatars1.githubusercontent.com/u/29588459?s=460&v=4"});
  await db.user.create({ name: "David", userName: "MoldySmurf", nativeLanguage: "en", targetLanguage: "it", email: "someemail@email.com", password: "dejectedMammoth", image: "https://thebakermama.com/wp-content/uploads/2018/08/fullsizeoutput_15a7c.jpg"});
  await db.user.create({ name: "Chaney", userName: "PrincessPeach", nativeLanguage: "en", targetLanguage: "fr", email: "lostemail@coolio.gov", password: "passwordNotFound", image: "https://www.mariowiki.com/images/thumb/8/82/MKAGPDX_Super_Star.png/200px-MKAGPDX_Super_Star.png"});
  await db.user.create({ name: "Marshall", userName: "MadMarshMuldoon", nativeLaguage: "en", targetLanguage: "ru", email: "oldemail@aol.com", password: "elderWorldDreams", image: "http://www.jurassicworld.com/sites/default/files/styles/double_tall_card/public/2016-10/2213_00320_tall.jpg?itok=jtOEJntn"});

}

dbRun(MONGODB_URI, db).catch(error => console.log(error.stack));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "development") {
  app.use(express.static("client/public"));
}
// Routes
app.post("/userLogin", function (req, res) {
  db.user.findOne({ "userName": req.body.userName, "password": req.body.password })
    .then( function(dbUser) {
      res.send(dbUser)
    })
    .catch(function(err) {
      res.send(err);
    })
  })

app.post("/login", function (req, res) {
  db.user.create(req.body).then(function (dbUser) {
    console.log(dbUser);
  });
});

app.get("/messenger", function (req, res) {
  db.message.find(req.body).then(function (dbMessage) {
    console.log(dbMessage);
  });
});

app.post("/messenger", function (req, res) {
  db.message.create(req.body).then(function (dbMessage) {
    console.log(dbMessage);
  });
});

app.delete("/messenger", function (req, res) {
  db.message.deleteOne(req.body).then(function (dbMessage) {
    console.log(dbMessage);
  });
});

// Send every other request to the React app
// Define any API routes before this runs
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

console.log(process.env.GOOGLE_APPLICATION_CREDENTIALS);
const server = app.listen(PORT, () =>
  console.log(`server is running on port ${PORT}`)
);

// ===== BEGIN SOCKET.IO ================================================== //
const io = socket(server); // Socket.io initalize after server loads - mounts on same connection/PORT

// array to manage connected clients
var clients = [];

// event on connection - adds user profile info to the new connection
// adding user properties passed down from app to socket
io.on("connection", socket => {
  // grab user info from connection handshake
  socket.user = socket.handshake.query; // captures user data and attaches to socket/client

  // logs the new connection to server
  console.log(`${socket.user.name} (id: ${socket.user.id}) has connected.`);

  // push new client into the client array
  clients.push(socket);

  // handle messages and relay to connected clients
  socket.on("SEND_MESSAGE", function (data) {
    console.log(data); // logs message object on receit

    // ===== BEGIN RELAY LOOP ================================================= //
    clients.forEach(client => {
      // ===== BEGIN GOOGLE TRANSLATE API CALL  ================================= //
      async function main(projectId = process.env.GOOGLE_CLOUD_PROJECT_ID) {

        // Imports the Google Cloud client library
        const { Translate } = require("@google-cloud/translate");
        const translate = new Translate({ projectId });

        // The text to translate from message
        const text = data.message;

        // The target language of each client
        const target = client.user.target;

        // Translates text into target language
        const [translation] = await translate.translate(text, target);

        // adds translated message to msg object
        data.translation = translation;

        client.emit("RECEIVE_MESSAGE", data); // relay message to all clients (to be deprecated)
        console.log(
          `Emitted message to ${client.user.userName} in target language: ${
          client.user.target
          }.`
        ); // log message relays
      }

      const args = process.argv.slice(2);

      main(...args).catch(err => {
        console.log(err); // log error for debugging

        data.translation = `Error occured.  Failed to translate: '${
          data.message
          }.'`; // send error message to clients

        client.emit("RECEIVE_MESSAGE", data); // relay error message to all clients (to be deprecated)
      });
      // ===== END GOOGLE TRANSLATE API CALL  =================================== //
    });
    // ===== END RELAY LOOP =================================================== //
  });

  // handle disconnections
  socket.on("disconnect", function () {
    const i = clients.indexOf(socket); // get index from client array of disconnected client
    const client = clients[i]; // get disconnected client info

    console.log(
      `${client.user.userName} (id: ${client.user.userID}) has disconnected.`
    );

    clients.splice(i, 1); // remove disconnected client from clients array
  });
});
// ===== END SOCKET.IO ==================================================== //

