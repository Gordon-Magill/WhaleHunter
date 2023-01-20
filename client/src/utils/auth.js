// Decoding JWT Tokens
import decode from "jwt-decode";


import {useReducer} from 'react'
import userReducer from '../utils/reducers'

// Class to contain methods for storing, retrieving, and using tokens from localStorage
class AuthService {
  // Get decoded token info from localStorage
  decodeToken() {
    return decode(this.getTokenFromLocal());
  }

  // Return's boolean of login state based on valid token check
  checkLoggedIn() {
    const token = this.getTokenFromLocal();
    return !!token && !this.checkTokenNotExpired(token); // handwaiving here
  }

  // Check if supplied token's expiry time has yet to pass
  checkTokenNotExpired(token) {
    try {
      const tokenContent = decode(token);
      if (tokenContent.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      // Catch case should also encompass logged out users
      return false;
    }
  }

  // Retrieves the user token from localStorage
  getTokenFromLocal() {
    return localStorage.getItem("id_token");
  }

  //   Save a supplied token to localStorage and take user to homepage
  saveTokenToLocal(idToken) {
    localStorage.setItem("id_token", idToken);
    window.location.assign("/");
  }

  //   Remove saved token from localStorage and kick user back to homepage
  removeTokenFromLocal() {
    localStorage.removeItem("id_token");
    window.location.assign("/");
  }
}

export default new AuthService();
