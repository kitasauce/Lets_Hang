import { gql } from '@apollo/client';

export const QUERY_BRAWLS = gql`
query Query($location: String!, $weapon: String!) {
  findLocWeapon(location: $location, weapon: $weapon) {
    weapon
    time
    location
  }
}
`;

export const QUERY_HANGS = gql`
  query Query($location: String!, $hobby: String!) {
  findLocHobby(location: $location, hobby: $hobby) {
    user_id
    location
    time
    hobby
  }
}
`;



// export const QUERY_TECH = gql`
//   query tech {
//     tech {
//       _id
//       name
//     }
//   }
// `;

export const QUERY_MATCHUPS_LOCATIONS = gql`
  query matchups($location: String) {
    matchups(_id: $_id, location: $location) {
      _id
      location

    }
  }
`;

export const QUERY_MATCHUPS_TIME = gql`
  query matchups($location: String) {
    matchups(_id: $_id, location: $location) {
      _id
      time

    }
  }
`;


export const QUERY_MATCHUPS_HOBBY = gql`
  query matchups($hobby: String) {
    matchups(_id: $_id, hobby: $hobby) {
      _id
      hobby

    }
  }
`;

export const QUERY_MATCHUPS_WEAPON = gql`
  query matchups($weapon: String) {
    matchups(_id: $_id, hobby: $hobby) {
      _id
      weapon

    }
  }
`;


// REFERENCE //
// import { gql } from '@apollo/client';

// export const QUERY_USER = gql`
// query user($username: String!) {
//   user(username: $username) {
//     _id
//     username
//     email
//     thoughts {
//       _id
//       thoughtText
//       createdAt
//     }
//   }
// }
// `;

// export const QUERY_THOUGHTS = gql`
// query getThoughts {
//   thoughts {
//     _id
//     thoughtText
//     thoughtAuthor
//     createdAt
//   }
// }
// `;

// export const QUERY_SINGLE_THOUGHT = gql`
// query getSingleThought($thoughtId: ID!) {
//   thought(thoughtId: $thoughtId) {
//     _id
//     thoughtText
//     thoughtAuthor
//     createdAt
//     comments {
//       _id
//       commentText
//       commentAuthor
//       createdAt
//     }
//   }
// }
// `;

// export const QUERY_ME = gql`
// query me {
//   me {
//     _id
//     username
//     email
//     thoughts {
//       _id
//       thoughtText
//       thoughtAuthor
//       createdAt
//     }
//   }
// }
// `;
