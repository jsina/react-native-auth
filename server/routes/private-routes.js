import express from "express";
import jwt from "jsonwebtoken";

import User from "../db/models/user-model";

const router = express.Router();

router.get("/private", (req, res) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(401).send({
      auth: false,
      message: "No token provided!"
    });
  }
  jwt.verify(token, process.env.TOKEN_SEC, (err, decoded) => {
    if (err) {
      return res.status(500).send({
        auth: false,
        message: "Failed to authenticate."
      });
    }
    User.findById(decoded._id, { password: 0 }, (err, user) => {
      if (err) {
        return res.status(500).send("There is a problem to find a user.");
      }
      if (!user) {
        return res.status(404).send("There is no user.");
      }
      return res.status(200).send(user);
    });
  });
});

export default router;
