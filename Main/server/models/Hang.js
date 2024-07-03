const { Schema, model } = require('mongoose');

const HangSchema = new Schema({
  Username: {
    type: String,
    required: true,
  },
  Location: {
    type: String,
    required: true,
  },
  Time: {
    type: Int,
    required: true,
  },
  Hobby: {
    type: String,
    required: true,
  }
});

const Hang = model('Hang', HangSchema);

module.exports = Hang;
