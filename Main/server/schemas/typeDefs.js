const typeDefs = `
  type Tech {
    _id: ID!
    name: String!
  }

  type Brawl {
    _id: ID!
    Username: String!
    Location: String!
    Time: Int
    Weapon: String!
  }

  type Hang {
    _id: ID!
    Username: String!
    Location: String!
    Time: Int
    Hobby: String!
  }

  type Query {
    findBrawls: [Brawl]
    findHangs: [Hang]
  }

  type Mutation {
    createMatchup(tech1: String!, tech2: String!): Matchup
    createVote(_id: String!, techNum: Int!): Matchup
  }
`;

module.exports = typeDefs;

//mutations need to be edited