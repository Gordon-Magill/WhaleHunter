import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        experience
        ship {
          accuracy
          armor
          attackPower
          evasion
          health
          healthCurrent
          imagePath
          name
          shield
          _id
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        email
        username
        experience
      }
    }
  }
`;

export const GET_STARTER_SHIP = gql`
  mutation Mutation {
    getStarterShip {
      _id
      accuracy
      armor
      attackPower
      evasion
      health
      healthCurrent
      name
      shield
      imagePath
    }
  }
`;
