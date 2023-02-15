
const mongoose = require("mongoose");
const subscriberModel = require("./models/subscribers");
const data = require("./data");

const mongoURI = "mongodb+srv://tapash1999:tapash1999@cluster0.v69zbiy.mongodb.net/?retryWrites=true&w=majority"

// Connect to DATABASE
const DATABASE_URL = "mongodb://localhost/subscribers";
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("Database created..."));

const refreshAll = async () => {
  await subscriberModel.deleteMany({});
  // console.log(connection)
  await subscriberModel.insertMany(data);
  await mongoose.disconnect();
};
refreshAll();
