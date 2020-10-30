import React, { useReducer } from 'react'
import PropTypes from 'prop-types'
import { AuthContext } from './auth.context'
import { isBrowser } from '../../helpers/checkBrowser'
import * as Action from '../../constants/action'
import { convertRole } from '../../helpers/convertRole'

const INITIAL_STATE = {
  isAuthenticated:
    (isBrowser && !!localStorage.getItem('access_token')) ||
    !!sessionStorage.getItem('access_token'),
  role:
    (isBrowser && localStorage.getItem('role')) ||
    sessionStorage.getItem('role')
}

function reducer(state, action) {
  switch (action.type) {
    case Action.SIGN_IN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        role: action.role
      }
    case Action.SIGN_OUT:
      return {
        ...state,
        isAuthenticated: false,
        role: convertRole.guest
      }
    case Action.FORGOT_PASS:
      return {
        ...state
      }
    default:
      return state
  }
}

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(reducer, INITIAL_STATE)
  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.any
}

export { AuthProvider }
