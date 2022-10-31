//import express
const express = require("express");
// import router
const router = express.Router();
// upload storage
let upload = require("./multer");

router.post("/upload", upload.single("files"), (req, res) => {
  res.send({
    success: true,
    path: req.file.filename,
  });
});

module.exports = router;
