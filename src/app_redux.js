import wepy from 'wepy'
import { createActions } from 'redux-actions'
import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware'
import typeToReducer from 'type-to-reducer'

const initialState = {
  userInfo: null,
  error: null,
  loading: false
}

export const { getUserInfo } = createActions({
  "GET_USER_INFO": wepy.getUserInfo
})

export default typeToReducer({
  [getUserInfo]: {
    PENDING: (state, action) => {
      return ({
        ...state,
        loading: true
      })
    },
    REJECTED: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload
    }),
    FULFILLED: (state, action) => ({
      ...state,
      loading: false,
      userInfo: action.payload.userInfo
    })
  }
}, initialState)
