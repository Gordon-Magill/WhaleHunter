// Get mongoDB models
const {User} = require('../models')

// Allow for token signing
const { signToken } = require('../utils/auth');

const resolvers = {
    Query:{},
    Mutation:{}
}

module.exports = resolvers;