// const mongoose = require('mongoose');
import mongoose from 'mongoose';
require('dotenv').config()

mongoose.Promise = global.Promise;

mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}${process.env.DB_HOST}`, { useNewUrlParser: true })
  .then(() => console.log('DB Connected'))
  .catch(err => console.log(err));

export default mongoose;
