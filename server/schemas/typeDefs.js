// Use graphQL from Apollo
const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Stats {
        statsID: ID!
        attackPower: Float!
        health: Float!
        armor: Float!
        shield: Float!
        accuracy: Float!
        initiative: Float!
        evasion: Float!
        imageID: String!
    }

    type Item {
        itemID: ID!
        description: String!
        stats: Stats!
        icon: String!
    }

    type Ship {
        shipID: ID!
        name: String!
        attackPower: Float!
        health: Float!
        armor: Float!
        shield: Float!
        accuracy: Float!
        initiative: Float!
        evasion: Float!
        imageID: String!
    }

    type User {
        _id: ID!
        username: String!
        email: String!
        inventory: [Item]!
        equippedInventory: [Item]!
        ship: Ship
        shipInventory: [Ship]
    }

    type Auth {
        token: ID!
        user: User
    }

    input shipInput {
        shipID: String!
        name: String!
        attackPower: Float!
        health: Float!
        armor: Float!
        shield: Float!
        accuracy: Float!
        initiative: Float!
        evasion: Float!
        imageID: String!
    }

    type Query {
        users: [User]
        user(userID: ID!): User
        me: User
        ships: [Ship]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addShip(shipInfo: shipInput!): Ship
    }
`;

module.exports = typeDefs;
