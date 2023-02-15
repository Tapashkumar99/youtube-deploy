
const express = require("express");
const app = require("./app.js");
const mongoose = require("mongoose");
const port = 3000;

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to DATABASE
const mongoURI = "mongodb+srv://tapash1999:tapash1999@cluster0.v69zbiy.mongodb.net/?retryWrites=true&w=majority"
const DATABASE_URL = "mongodb://localhost/subscribers";
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("Connected to database"));

// Start Server
app.listen(port, () => console.log(`App listening on port ${port}!`));
