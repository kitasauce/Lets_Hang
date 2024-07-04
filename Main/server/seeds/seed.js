const db = require('../config/connection');
const { User, Hang } = require('../models');
// const cleanDB = require('./cleanDB');

const userData = require('./userData.json');
// const brawlData = require('./brawlData.json');
const hangData = require('./hangData.json');

//this also needs to be edited so the variables from above lines 5-7 are used 

db.once('open', async () => {
  // await cleanDB('User', 'teches');
  let userCheck = await db.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await db.dropCollection('users');
  }
 let userInfo = await User.insertMany(userData);
console.log(userInfo[0]._id);
  let hangCheck = await db.db.listCollections({ name: 'hangs'}).toArray();
  if (hangCheck.length) {
    await db.dropCollection('hangs');
    }
    hangData[0].user_id = userInfo[0]._id

    console.log("This is HangData!!!! ",hangData)
    await Hang.insertMany(hangData);

  console.log('DB seeded!');
  process.exit(0);
});


