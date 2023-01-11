// Apollo, Express, mongoDB as key stack components
const {ApolloServer} = require("apollo-server-express");
const express = require("express");
const db = require('./config/connection')

// Helpers for express routing and graphQL client requests
const path = require('path')
const {typeDefs, resolvers} = require("./schemas");
const { authMiddleware } = require("./utils/auth");

// ********************************************
// AUTH MIDDLEWARE COMMENTED OUT UNTIL COMPLETE
// ********************************************
const {authMiddleware} = require('.utils/auth')

// Define the core express app
const app = express()
const PORT = process.env.PORT || 3001;

// Use core middlewares for express
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// If deployed in production, source static content from the client build folder
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname,"../client/build")))
}

// Define the graphQL Apollo server interface
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
})

// Send all GET requests the client content and let React handle the rest
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,"../client/"))
})

// Define server startup
async function startApolloServer() {
    // Minimally wait until the core Apollo server is up
    await server.start()

    // Enable middleware defined through express
    server.applyMiddleware({app})

    // Start mongoDB + start the express server
    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`Space Grift: Whale Hunter server now started on localhost:${PORT}`)
        })
    })
}

// Actually start the server
startApolloServer()