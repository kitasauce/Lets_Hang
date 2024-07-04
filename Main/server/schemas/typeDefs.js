const typeDefs = `

type Query {
  findBrawls: [Brawl]
  findHangs: [Hang]
}

type User {
  id: ID!
  first: String!
  last: String!
  username: String!
  password: String!
 }
  
  type Brawl {
    _id: ID!
    username: String!
    location: String!
    time: Int
    weapon: String!
  }
  
  type Hang {
    _id: ID!
    username: String!
    location: String!
    time: Int
    hobby: String!
  }

 type Auth {
  user: User
  token: ID
 }

  type Mutation {
    createSignup(first: String! last: String!, username: String!, password: String!): Auth
    createBrawl(Username: String!, Location: String!, Time: String!, Weapon: String!): Brawl
    createHang(Username: String!, Location: String!, Time: String!, Hobby: String!): Hang
  }
`;

module.exports = typeDefs;

