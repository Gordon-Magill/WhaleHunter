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

export const QUERY_SINGLE_ICON = gql`
  query getSingleIcon($iconId: ID!) {
    icon(iconId: $iconId) {
      _id
      objectType
      img {
        _id
        data
        contentType
      }
    }
  }
`;

//todo: single monster/random single monster query
