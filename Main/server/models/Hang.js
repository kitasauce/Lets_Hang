const { Schema, model } = require('mongoose');

const HangSchema = new Schema({
  Location: {
    type: String,
    required: true,
  }, 
  Hobby: {
    type: String,
    required: true,
  }
});

const Hang = model('Hang', HangSchema);

module.exports = Hang;
