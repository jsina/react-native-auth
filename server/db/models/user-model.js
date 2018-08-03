import mongoose from "../mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

const User = new mongoose.Schema({
  email: {
    type: String,
    minlength: 5,
    trim: true,
    required: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "{VALUE} is not a valid email!"
    }
  },
  username: {
    type: String,
    minlength: 6,
    trim: true,
    required: true,
    unique: true
  },
  password: {
    type: String,
    trim: true,
    required: true
  }
});

User.pre("save", function(next) {
  let user = this;
  if (!user.isModified("password")) {
    return next();
  }

  bcrypt.genSalt(12, function(err, salt) {
    if (err) {
      return Promise.reject(err);
    }
    bcrypt.hash(user.password, salt, function(err, hashPassword) {
      user.password = hashPassword;
      next();
    });
  });

  /* This also works fine
    bcrypt.hash(user.password, 12, function(err, hashPassword) {
      user.password = hashPassword;
      next();
    });
  */
});

export default mongoose.model("User", User);
