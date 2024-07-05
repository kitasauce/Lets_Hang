const { Schema, model } = require('mongoose');

const BrawlSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    
  },
  location: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  weapon: {
    type: String,
    required: true,
  }
  
});

const Brawl = model('Brawl', BrawlSchema);

module.exports = Brawl;

// const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');

// const thoughtSchema = new Schema({
//   thoughtText: {
//     type: String,
//     required: 'You need to leave a thought!',
//     minlength: 1,
//     maxlength: 280,
//     trim: true,
//   },
//   thoughtAuthor: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//     get: (timestamp) => dateFormat(timestamp),
//   },
//   comments: [
//     {
//       commentText: {
//         type: String,
//         required: true,
//         minlength: 1,
//         maxlength: 280,
//       },
//       commentAuthor: {
//         type: String,
//         required: true,
//       },
//       createdAt: {
//         type: Date,
//         default: Date.now,
//         get: (timestamp) => dateFormat(timestamp),
//       },
//     },
//   ],
// });

// const Thought = model('Thought', thoughtSchema);

// module.exports = Thought;
