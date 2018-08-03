var jwt = require("jsonwebtoken");

let sec = "123455";
const options = {
  expiresIn: "365 days"
};
let token = jwt.sign({ id: "123ewd" }, sec, options);

let verify = jwt.verify(token, sec)

console.log("verify:", verify);
