export function userReducer(state, action) {
  switch (action.type) {
    case 'LOGIN_USER': {
        const userInfo = action.payload.user || null

        return {
            ...state,
            userInfo
        }
    }
  }
}