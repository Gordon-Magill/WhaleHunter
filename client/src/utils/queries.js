import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      inventory
      equippedInventory
      ship
      shipInventory
      experience
    }
  }
`;

// Query all monsters
export const QUERY_MONSTERS = gql`
  query Query {
    monsters {
      _id
      accuracy
      armor
      attackPower
      evasion
      expGrant
      health
      imagePath
      name
      shield
    }
  }
`;

export const GET_STARTER_SHIP = gql`
  query Query {
    getStarterShip {
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
  }
`;

//todo: single monster/random single monster query
