const { Schema, model } = require('mongoose');

const BrawlSchema = new Schema({
  Location: {
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
