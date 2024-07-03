const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  First: {
    type: String,
    required: true
  },
  Last: {
    type: String,
    required: true,
  },
  Username: {
    type: String,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    required: true,
    unique: true,
  },
  UserID: {
    type: String,
  }
});

const User = model('User', UserSchema);

module.exports = User;
