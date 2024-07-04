const { Schema, model } = require('mongoose');

const HangSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  hobby: {
    type: String,
    required: true,
  },
  hangers:[
    {
      type: Schema.Types.ObjectId,
      ref: 'user',
    }
  ]
});

const Hang = model('hang', HangSchema);

module.exports = Hang;
