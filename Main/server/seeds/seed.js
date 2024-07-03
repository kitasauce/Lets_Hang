const db = require('../config/connection');
const { Tech } = require('../models');
const cleanDB = require('./cleanDB');

const userData = require('./userData.json');
const brawlData = require('./brawlData.json');
const hangData = require('./hangData.json');

db.once('open', async () => {
  await cleanDB('Tech', 'teches');

  await Tech.insertMany(techData);

  console.log('DB seeded!');
  process.exit(0);
});
