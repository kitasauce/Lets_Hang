const { Schema, model } = require('mongoose');

const BrawlSchema = new Schema({
  Username: {
    type: String,
    required: true,
  },
  Location: {
    type: String,
    required: true,
  },
  Time: {
    type: String,
    required: true,
  },
  Weapon: {
    type: String,
    required: true,
  }
});

const Brawl = model('Brawl', BrawlSchema);

module.exports = Brawl;
