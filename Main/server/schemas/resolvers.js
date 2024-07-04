const {User,Hang} = require('../models');

const resolvers = {
  Query: {
    findBrawls: async () => {
      return Brawl.find({});
    },
    findHangs: async () => {
      return Hang.find({});
    },
  },
//basic creation of brawls and hangs- this is where we left off w/Charlie
  Mutation: {
    createUser: async (parent, args) => {
      const user = await user.create(args);
    },
    
    // createBrawl: async (parent, args) => {
    //   const Brawl = await Brawl.create(args);
    //   return Brawl;
    // },
    createHang: async (parent, args) => {
      const Hang = await Hang.create(args);
      return Hang;
    },
  },
};

module.exports = resolvers;
