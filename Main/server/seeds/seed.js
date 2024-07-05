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


// 
// const db = require('../config/connection');
// const { User, Thought } = require('../models');
// const userSeeds = require('./userSeeds.json');
// const thoughtSeeds = require('./thoughtSeeds.json');
// const cleanDB = require('./cleanDB');

// db.once('open', async () => {
//   try {
//     await cleanDB('Thought', 'thoughts');

//     await cleanDB('User', 'users');

//     await User.create(userSeeds);

//     for (let i = 0; i < thoughtSeeds.length; i++) {
//       const { _id, thoughtAuthor } = await Thought.create(thoughtSeeds[i]);
//       const user = await User.findOneAndUpdate(
//         { username: thoughtAuthor },
//         {
//           $addToSet: {
//             thoughts: _id,
//           },
//         }
//       );
//     }
//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }

//   console.log('all done!');
//   process.exit(0);
// });
