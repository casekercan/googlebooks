const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
var CONNECTION_URI = process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist";

mongoose.connect(CONNECTION_URI, { useMongoClient: true }).then(() => {
  console.log('Connected to MongoDB.');
}).catch(err => console.log(err));


// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
