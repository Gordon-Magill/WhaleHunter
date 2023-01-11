// Get mongoDB models
const { User } = require("../models");

// Authentication errors for when provided tokens are invalid
const { AuthenticationError } = require("apollo-server-express");

// Allow for token signing
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context, info) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-password"
        );
        return userData;
      }
      //   If the user wasn't logged in...
      throw new AuthenticationError("AuthenticationError: Invalid login attmpting to query 'me'");
    },
    users: async (parent, args, context, info) => {
        if (context.user) {
            const usersData = await User.find({}).select("-password -email -__v")
            return usersData
        }

        throw new AuthenticationError("AuthenticationError: Invalid login attempting to query 'users'");
    },
    user: async (parent, args, context, info) => {
        if (context.user) {
            const userData = await User.findById(context.user._id).select('-password')
            return userData
        }

        throw new AuthenticationError("AuthenticationError: Invalid login attempting to query 'user(id)'")

    },
  },
  Mutation: {
    login: async (parent, args, context, info) => {
        const user = await User.findOne({email: args.email})

        if (!user) {
            throw new AuthenticationError('Bad Credentials')
        }

        const correctPw = await user.isCorrectPassword(args.password)

        if (!correctPw) {
            throw new AuthenticationError('Bad Credentials')
        }

        const token = signToken(user)

        // Returns an Auth object of the logged in user
        return {token, user}
    },
    addUser: async (parent, args, context, info) => {
        const user = await User.create(args)
        const token = signToken(user)

        // Returns an Auth object for the newly created user
        return {token, user}
    }
  }
};

module.exports = resolvers;
