const typeDefs = `


type User {
  id: ID!
  first: String!
  last: String!
  username: String!
  password: String!
 }
  
  type Brawl {
    user_id: ID!
    location: String!
    time: String!
    weapon: String!
  }
  
  type Hang {
    user_id: ID!
    location: String!
    time: String!
    hobby: String!
  }
type Query {
  findBrawls: [Brawl]
  findHangs: [Hang]
  findLocHobby(location: String!, hobby: String!): [Hang]
  findLocWeapon(location: String!, weapon: String!): [Brawl]
}
 type Auth {
  user: User
  token: ID
 }

  type Mutation {
    createSignup(first: String! last: String!, username: String!, password: String!): Auth

    createBrawl(Username: String!, Location: String!, Time: String!, Weapon: String!): Brawl
    createHang(Username: String!, Location: String!, Time: String!, Hobby: String!): Hang
    login(username: String!, password: String!): Auth

  }
`;

module.exports = typeDefs;



// // const typeDefs = `
//   type User {
//     _id: ID
//     username: String
//     email: String
//     password: String
//     thoughts: [Thought]!
//   }

//   type Thought {
//     _id: ID
//     thoughtText: String
//     thoughtAuthor: String
//     createdAt: String
//     comments: [Comment]!
//   }

//   type Comment {
//     _id: ID
//     commentText: String
//     commentAuthor: String
//     createdAt: String
//   }

//   type Auth {
//     token: ID!
//     user: User
//   }

//   type Query {
//     users: [User]
//     user(username: String!): User
//     thoughts(username: String): [Thought]
//     thought(thoughtId: ID!): Thought
//     me: User
//   }

//   type Mutation {
//     addUser(username: String!, email: String!, password: String!): Auth
//     login(email: String!, password: String!): Auth
//     addThought(thoughtText: String!): Thought
//     addComment(thoughtId: ID!, commentText: String!): Thought
//     removeThought(thoughtId: ID!): Thought
//     removeComment(thoughtId: ID!, commentId: ID!): Thought
//   }
// `;

// module.exports = typeDefs;