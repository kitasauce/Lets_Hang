const db = require('../config/connection');
const { User, Hang, Brawl } = require('../models');
const userData = require('./userSeeds.json');
const brawlData = require('./brawlSeeds.json');
const hangData = require('./hangSeeds.json');

//this also needs to be edited so the variables from above lines 5-7 are used 

db.once('open', async () => {
  // await cleanDB('User', 'teches');
  let userCheck = await db.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await db.dropCollection('users');
  }
 let userInfo = await User.insertMany(userData);
// console.log(userInfo[0]._id);
  let hangCheck = await db.db.listCollections({ name: 'hangs'}).toArray();
  if (hangCheck.length) {
    await db.dropCollection('hangs');
    }
    
    for (var i=0; i<5; i++) {
      hangData[i].user_id = userInfo[i]._id
    }
let brawlCheck = await db.db.listCollections({ name: 'brawls'}).toArray();
if (brawlCheck.length) {
  await db.dropCollection('brawls');
  }
    console.log("This is HangData!!!! ",hangData)
    await Hang.insertMany(hangData);
    await Brawl.insertMany(brawlData);
    
  console.log('DB seeded!');
  process.exit(0);
});

