// Apollo, Express, mongoDB as key stack components
const {ApolloServer} = require("apollo-server-express");
const express = require("express");
const db = require('./config/connection')

// Helpers
const path = require('path')
// const {authMiddleware} = require('.utils/auth')
const {typeDefs, resolvers} = require("./schemas")
