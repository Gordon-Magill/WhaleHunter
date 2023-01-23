// Use graphQL from Apollo
const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Monster {
        _id: ID!
        name: String!
        attackPower: Float!
        health: Float!
        armor: Float!
        shield: Float!
        accuracy: Float!
        evasion: Float!
        imagePath: String!
        expGrant: Float!
    }

    type Ship {
        _id: ID!
        name: String!
        attackPower: Float!
        health: Float!
        healthCurrent: Float!
        armor: Float!
        shield: Float!
        accuracy: Float!
        evasion: Float!
        imagePath: String!
    }

    type User {
        _id: ID!
        username: String!
        email: String!
        ship: Ship
        shipInventory: [Ship]
        experience: Float!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        user(userID: ID!): User
        me: User
        ships: [Ship]
        monsters: [Monster]
        randomMonster: Monster
        getStarterShip: Ship
    }
    
    type Mutation {
            login(email: String!, password: String!): Auth
            addUser(username: String!, email: String!, password: String!): Auth
            addUserExp(expValue: Float): User
            
        }
`;
// TODO
// -Change addUserExp to a more general end of battle resolver that saves ship health as well

module.exports = typeDefs;
