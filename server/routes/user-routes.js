import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../db/models/user-model";

var router = express.Router();

router.post("/register", (req, res) => {
  const { email, username, password } = req.body;

  let user = new User({
    email,
    username,
    password
  });
  user
    .save()
    .then(user => {
      if (!user) {
        return res.status(400).send();
      }
      return res.status(201).send(user);
    })
    .catch(err => {
      console.log(err, " err");

      if (err) {
        return res.status(400).send(err);
      }
      return res.status(400).send();
    });
});

router.post("/login", (req, resp) => {
  const { username, password } = req.body;
  User.findOne({ username })
    .then(user => {
      if (!user) {
        return resp.status(400).send();
      }
      bcrypt.compare(password, user.password).then(match => {
        if (!match) {
          return resp.status(401).send('Wrong user or pass!');
        }
        let token = jwt.sign({ _id: user.id }, process.env.TOKEN_SEC, {
          expiresIn: "365 days"
        });
        return resp.status(201).send({ token });
      });
    })
    .catch(err => {
      x;
      if (!err) {
        return resp.status(401).send();
      }
      return resp.status(401).send(err);
    });
});

export default router;
