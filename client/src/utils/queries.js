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
  query Monsters {
    monsters {
      monsterID
      name
      attackPower
      health
      armor
      shield
      accuracy
      evasion
      imageID
      expGrant
    }
  }
`;

//todo: single monster/random single monster query
