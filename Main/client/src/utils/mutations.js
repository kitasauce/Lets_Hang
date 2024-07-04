import { gql } from '@apollo/client';

export const CREATE_SIGNUP = gql`
utation Mutation($first: String!, $last: String!, $username: String!, $password: String!) {
  createSignup(first: $first, last: $last, username: $username, password: $password) {
    user {
      id
      first
      last
      username
      password
    }
    token
  }
}`;


