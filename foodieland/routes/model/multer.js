const multer = require("multer");
const path = require("path");

var storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, path.join(__dirname, "../../www/public"));
  },
  filename(req, file, callback) {
    callback(null, Date.now() + path.extname(file.originalname));
  },
});

var upload = multer({ storage: storage });
module.exports = upload;
