//import express
const express = require("express");
// import router
const router = express.Router();
// import password
const bcrypt = require("bcrypt");
// import create token
const jwt = require("jsonwebtoken");
// import mongon database
const MongoClient = require("mongodb").MongoClient;
// contact local database
const url = "mongodb://127.0.0.1:27017";
var loginCollection;
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  console.log("database connect");
  var dbo = db.db("House");
  // contact chat
  loginCollection = dbo.collection("login");
});
// register
router.post("/register", (req, res) => {
  const { username, password } = req.body;
  if (password) {
    // bcrypt.hashSync
    const hashPwd = bcrypt.hashSync(password, 10); 
    // use bcrypt.hashSync create password
    let obj = { username, password: hashPwd };
    // insert users
    loginCollection.insertOne(obj, (err, result) => {
      if (result) {
        res.send({
          msg: "register success",
          success: true,
        });
      } else {
        res.send({
          msg: "register failed",
          success: false,
        });
      }
    });
  } else {
    res.send({
      success: false,
      msg: "please insert username & password",
    });
  }
});
//login
router.post("/login", (req, res) => {
  const { password, username } = req.body;

  if (username && password) {
    // search collection user
    loginCollection.findOne({ username }, (err, data) => {
      if (data) {
        // user exist
        const isPwdValid = bcrypt.compareSync(password, data.password);
        if (isPwdValid) {
          //password right create token
          let token = jwt.sign(data, "token", { expiresIn: 60 * 60 * 24 }); Intersting to see youguys are using JWT token here for authentication, just done a Python/Flask Project with JWT as my flow.
          res.send({
            username: username,
            msg: "Login success!",
            token: token,
            success: true,
            data: data,          Payload looks good for JWT token
          });
        } else {
          res.send({
            msg: "Password Error!",
            success: false,
          });
        }
      } else {
        res.send({
          msg: "User not exist, please check!",
          success: false,
        });
      }
    });
  } else {
    res.send({
      success: false,
      msg: "code error",
    });
  }
});
module.exports = router;
