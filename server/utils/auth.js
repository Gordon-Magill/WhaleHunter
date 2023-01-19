const jwt = require("jsonwebtoken");
require("dotenv").config();

const secret = process.env.spaceGriftWhaleHunter_SECRET;
const expiration = "2h";

// Use JWT token embedded in request headers (from authenticated users)
function authMiddleware({ req, res }) {
  // Token will be in the header authorization prop in the form of a string "Bearer tokenValue"
  console.log('authMiddleware started')
  // allows token to be sent via  req.query or headers (NEW: or with token in the body, even if nonstand it's good to have)
  let token = req.query.token || req.headers.authorization || req.body.token;

  console.log('Auth token:', token)
  // ["Bearer", "<tokenvalue>"]
  if (req.headers.authorization) {
    token = token.split(' ').pop().trim();
  }


  // Return the plain request if it's unauthenticated
  if (!token) {
    return req;
  }

  // Extract the user information from the request token and populate the users attribute
  try {
    const { data } = jwt.verify(token, secret, { maxAge: expiration });
    req.user = data;
  } catch {
    console.log("Auth middleware error: Could not verify token");
  }

  // Always return the request, even if it raised an error
  // If the user is authenticated, the request will now have req.user populated with
  // the values embedded by signToken, otherwise that property will be undefined
  console.log(`authmiddleware about to exit`)
  return req;
}

// Embed username, email, and user's mongoDB _id in a token
// Used by server.js to add identifying user info to request headers after authentication
function signToken({ username, email, _id }) {
  const payload = { username, email, _id };
  const token = jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  return token;
}

module.exports = {
  authMiddleware,
  signToken,
};
