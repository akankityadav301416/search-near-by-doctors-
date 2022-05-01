const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.static("./assets"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.set("views", "./views");
app.get("/", function (req, res) {
  res.render("home");
});
const post_controller = require("./controllers/post_controller");

const Doctor = require("./configration/mongoose.js");
const mongoose = require("mongoose");
const options = {
  useMongoClient: true,
  autoIndex: false,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  poolSize: 10,

  bufferMaxEntries: 0,
};
const uri = "mongodb+srv://Ankit5014:Ankit-5014@cluster0.rdj4o.mongodb.net/doctorDB?retryWrites=true&w=majority";
mongoose.connect(uri, options);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error connecting to MongoDB"));
db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});

app.post("/post_disease", post_controller.update_disease);

app.post("/post_hospital", post_controller.update_hospital);

app.post("/post_specialization", post_controller.update_specialization);

app.get("/", function (req, res) {
  return res.render("home", {
    Doctor: Doctor,
  });
});
app.get("/doctors/:id", function (req, res) {
  Doctor.findById(req.params.id, function (err, user) {
    return res.render("doctor_profile", { profile_user: user });
  });
});

app.get("/about", function (req, res) {
  return res.render("about");
});

app.get("/contact", function (req, res) {
  return res.render("contact");
});

// app.listen(3000, function () {
//   console.log("server is started running on port 3000");
// });

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port,function(){
  console.log("Port has successfully started");
});

// <% if(<%= element[1]%>>5000){%> Please Allow Location to Get Distance <%}%>
// <% else{%> <%= element[1] %> <%}%>
