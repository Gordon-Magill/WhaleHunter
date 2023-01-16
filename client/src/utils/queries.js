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

//todo: single monster/random single monster query 
