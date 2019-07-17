const express = require("express");
var mongoose = require("mongoose");
//var db = require("./models");
const path = require("path");

const PORT = process.env.PORT || 8080;
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

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
