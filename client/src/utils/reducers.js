import { LOGIN, LOGOUT } from "./actions";

export default function userReducer(state, action){
  switch (action.type) {
    case LOGIN: {
      try {
        const userInfo = action.payload || null;
        console.log("userReducer LOGIN set state.userInfo as: ", userInfo);

        return {
          ...state,
          userInfo,
        };
      } catch {
        console.error("userReducer: Failed to update state during LOGIN");
      }
    }
    case LOGOUT: {
      try {
        const userInfo = {username: null};
        console.log("userReducer LOGOUT set user info as null: ", userInfo);
  
        return {
          ...state,
          userInfo,
        };
  
      } catch {
        console.error("userReducer: Failed to update state during LOGOUT");
      }
    }
    default: {
        return state;
    }
  }
}
