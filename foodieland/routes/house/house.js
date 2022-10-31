//import express
const express = require("express");
// import router
const router = express.Router();
// import create token
const jwt = require("jsonwebtoken");
// import mongo database
const MongoClient = require("mongodb").MongoClient;
// contact mongodb database
const url = "mongodb://127.0.0.1:27017";
var houseCollection;
var ObjectId = require("mongodb").ObjectId;

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  console.log("database connect");
  var dbo = db.db("FoodieHouse");
  // contact Foodie house
  houseCollection = dbo.collection("FoodieHouse");
});
// add
router.post("/add", (req, res) => {
  const { user, name, address, mark, image } = req.body;
  let createUser = "";
  jwt.verify(req.headers.token, "token", (error, result) => {
    if (result) {
      createUser = result.username;
    }
  });
  let obj = {
    user,
    name,
    address,
    mark,
    image,
    createUser,
    comment: "[]",
    count: 0,
    time: new Date().getTime() / 1000,
  };
  houseCollection.insertOne(obj, (err, result) => {
    if (result) {
      res.send({
        msg: "add success",
        success: true,
      });
    } else {
      res.send({
        msg: "add failed",
        success: false,
      });
    }
  });
});

// get All
router.get("/all", (req, res) => {
  houseCollection.find().toArray((err, result) => {
    if (result) {
      res.send({
        data: result,
        success: true,
      });
    } else {
      res.send({
        msg: "add failed",
        success: false,
      });
    }
  });
});

// search
router.get("/get", (req, res) => {
  const { name } = req.query;
  houseCollection.find({ name: { $regex: name } }).toArray((err, result) => {
    if (result) {
      res.send({
        data: result,
        success: true,
      });
    } else {
      res.send({
        msg: "add failed",
        success: false,
      });
    }
  });
});

//search my account
router.get("/mine", (req, res) => {
  let user = "";
  jwt.verify(req.headers.token, "token", (error, result) => {
    if (result) {
      user = result.username;
    }
  });

  houseCollection.find({ user }).toArray((err, result) => {
    if (result) {
      res.send({
        data: result,
        success: true,
      });
    } else {
      res.send({
        msg: "add failed",
        success: false,
      });
    }
  });
});

//view one
router.get("/info", (req, res) => {
  const { id } = req.query;
  houseCollection.find({ _id: new ObjectId(id) }).toArray((err, result) => {
    if (result) {
      res.send({
        data: result,
        success: true,
      });
    } else {
      res.send({
        msg: "add failed",
        success: false,
      });
    }
  });
});

//edit one
router.post("/save", (req, res) => {
  houseCollection.replaceOne(
    { _id: new ObjectId(req.body.id) },
    req.body,
    (err, result) => {
      if (result) {
        res.send({
          data: result,
          success: true,
        });
      } else {
        res.send({
          msg: "edit failed",
          success: false,
        });
      }
    }
  );
});

//delete one
router.get("/delete", (req, res) => {
  let { id } = req.query;
  houseCollection.remove({ _id: new ObjectId(id) }, (err, result) => {
    if (result) {
      res.send({
        data: "Delete Success!",
        success: true,
      });
    } else {
      res.send({
        msg: "Delete Failed!",
        success: false,
      });
    }
  });
});

module.exports = router;
