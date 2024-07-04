//double check this model, it may be incorrect

const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  first: {
    type: String,
    required: true
  },
  last: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  userID: {
    type: String,
  }
});

const User = model('User', UserSchema);

module.exports = User;
