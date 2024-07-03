const db = require('../config/connection');
const { Tech } = require('../models');
const cleanDB = require('./cleanDB');

const userData = require('./userData.json');
const brawlData = require('./brawlData.json');
const hangData = require('./hangData.json');

//this also needs to be edited so the variables from above lines 5-7 are used 

db.once('open', async () => {
  await cleanDB('Tech', 'teches');

  await Tech.insertMany(techData);

  console.log('DB seeded!');
  process.exit(0);
});
