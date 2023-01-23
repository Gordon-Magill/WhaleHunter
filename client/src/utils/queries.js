import { gql } from '@apollo/client';

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
  query allMonsters {
    monsters {
      _id
      name
      attackPower
      health
      armor
      shield
      accuracy
      evasion
      expGrant
      imagePath
    }
  }
`;

//todo: single monster/random single monster query
