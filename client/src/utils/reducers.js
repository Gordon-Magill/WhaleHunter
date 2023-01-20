import {LOGIN, LOGOUT} from './actions'

export function userReducer(state, action) {
  switch (action.type) {
    case LOGIN: {
        const userInfo = action.payload.user || null
        console.log('userReducer LOGIN set user info as: ', userInfo)

        return {
            ...state,
            userInfo
        }
    }
    case LOGOUT: {
        const userInfo = null
        console.log('userReducer LOGOUT set user info as null: ',userInfo)
        
        return {
            ...state,
            userInfo
        }
    }
  }
}