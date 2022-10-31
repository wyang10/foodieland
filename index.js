//import express module
let express = require("express");
let path = require("path");
// import router
const loginRouter = require("./routes/login/login");
const pictureRouter = require("./routes/house/house");
const { jwtCheck } = require("./routes/model/token.js");
const uploadRouter = require("./routes/model/upload");
// create express
let app = express();

// index
app.use("/", express.static("www"));
// handler cross issue
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  //res.header('Access-Control-Allow-Headers',"token", 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  // res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Login
app.use("/user", loginRouter);
app.use("/api", uploadRouter);

//In here will be checked if token is expired
app.use("/house", jwtCheck);
app.use("/house", pictureRouter);

app.listen("3001", "127.0.0.1", () => {
  console.log("Success, Listing Serve 3001");
});
module.exports = app;
