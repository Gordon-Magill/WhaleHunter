import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        experience
        username
        ship {
          _id
          accuracy
          armor
          attackPower
          evasion
          health
          healthCurrent
          imagePath
          name
          shield
        }
        shipInventory {
          _id
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        email
        experience
        username
        ship {
          _id
          accuracy
          armor
          attackPower
          evasion
          health
          healthCurrent
          imagePath
          name
          shield
        }
        shipInventory {
          _id
        }
      }
    }
  }
`;

