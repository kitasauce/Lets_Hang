
const {User,Hang, Brawl} = require('../models');
const {signToken, AuthenticationError} = require("../utils/auth")

const resolvers = {
  Query: {
    
    findBrawls: async () => {
      return Brawl.find({});
    },
    findHangs: async () => {
      return Hang.find({});
    },
    findLocHobby: async (parent, args) => {
      let hang = await Hang.find({location: args.location, hobby: args.hobby })

      console.log(hang)
      
      return hang
    },
    findLocWeapon: async (parent, args) => {
      let brawl = await Brawl.find({location: args.location, hobby: args.hobby })

      console.log(brawl)

      return brawl
    }

  },


//basic creation of brawls and hangs- this is where we left off w/Charlie



  Mutation: {
    
    createSignup: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return {token, user};
    },
    createBrawl: async (parent, args, context) => {
      const Brawl = await Brawl.create(args);
      return Brawl;
    },
    createHang: async (parent, args, context) => {

   
      if(context.user){

        console.log("This is args = ", args)
        console.log("This is context === ", context.user)
        let newHangInfo = args;
        newHangInfo.user_id = context.user._id;

        console.log("this is new hang infor variable = ", newHangInfo)

        const newHang = await Hang.create(newHangInfo);
        return newHang;
      }

      throw AuthenticationError;
 
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });
console.log(user);
      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);
      console.log(correctPw);
      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
  },
}
};

module.exports = resolvers;






// REFERENCE //
// const { User, Thought } = require('../models');
// const { signToken, AuthenticationError } = require('../utils/auth');

// const resolvers = {
//   Query: {
//     users: async () => {
//       return User.find().populate('thoughts');
//     },
//     user: async (parent, { username }) => {
//       return User.findOne({ username }).populate('thoughts');
//     },
//     thoughts: async (parent, { username }) => {
//       const params = username ? { username } : {};
//       return Thought.find(params).sort({ createdAt: -1 });
//     },
//     thought: async (parent, { thoughtId }) => {
//       return Thought.findOne({ _id: thoughtId });
//     },
//     me: async (parent, args, context) => {
//       if (context.user) {
//         return User.findOne({ _id: context.user._id }).populate('thoughts');
//       }
//       throw AuthenticationError;
//     },
//   },

//   Mutation: {
//     addUser: async (parent, { username, email, password }) => {
//       const user = await User.create({ username, email, password });
//       const token = signToken(user);
//       return { token, user };
//     },
//     login: async (parent, { email, password }) => {
//       const user = await User.findOne({ email });

//       if (!user) {
//         throw AuthenticationError;
//       }

//       const correctPw = await user.isCorrectPassword(password);

//       if (!correctPw) {
//         throw AuthenticationError;
//       }

//       const token = signToken(user);

//       return { token, user };
//     },
//     addThought: async (parent, { thoughtText }, context) => {
//       if (context.user) {
//         const thought = await Thought.create({
//           thoughtText,
//           thoughtAuthor: context.user.username,
//         });

//         await User.findOneAndUpdate(
//           { _id: context.user._id },
//           { $addToSet: { thoughts: thought._id } }
//         );

//         return thought;
//       }
//       throw AuthenticationError;
//       ('You need to be logged in!');
//     },
//     addComment: async (parent, { thoughtId, commentText }, context) => {
//       if (context.user) {
//         return Thought.findOneAndUpdate(
//           { _id: thoughtId },
//           {
//             $addToSet: {
//               comments: { commentText, commentAuthor: context.user.username },
//             },
//           },
//           {
//             new: true,
//             runValidators: true,
//           }
//         );
//       }
//       throw AuthenticationError;
//     },
//     removeThought: async (parent, { thoughtId }, context) => {
//       if (context.user) {
//         const thought = await Thought.findOneAndDelete({
//           _id: thoughtId,
//           thoughtAuthor: context.user.username,
//         });

//         await User.findOneAndUpdate(
//           { _id: context.user._id },
//           { $pull: { thoughts: thought._id } }
//         );

//         return thought;
//       }
//       throw AuthenticationError;
//     },
//     removeComment: async (parent, { thoughtId, commentId }, context) => {
//       if (context.user) {
//         return Thought.findOneAndUpdate(
//           { _id: thoughtId },
//           {
//             $pull: {
//               comments: {
//                 _id: commentId,
//                 commentAuthor: context.user.username,
//               },
//             },
//           },
//           { new: true }
//         );
//       }
//       throw AuthenticationError;
//     },
//   },
// };

// module.exports = resolvers;
