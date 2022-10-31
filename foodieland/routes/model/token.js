// token generator
const jwt = require("jsonwebtoken");
const secret = "token"; // define new token

const jwtSign = (data) => {
  // token making function，valid for an hour
  let token = jwt.sign(data, secret, { expiresIn: 60 * 60 * 24 });
  return token;
};

const jwtCheck = (req, res, next) => {
  // token verification function
  let token = req.headers.token;
  jwt.verify(token, secret, (error, result) => {
    if (error) {
      console.log(error, "error");
      res.send({
        msg: "token is expired!",
        success: false,
        token: "token is expired!",
      });
    } else {
      next();
    }
  });
};

module.exports = {
  jwtSign,
  jwtCheck,
};
