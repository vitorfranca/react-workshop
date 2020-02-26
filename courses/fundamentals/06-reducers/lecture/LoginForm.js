import React, { useReducer } from 'react'
import { FaSignInAlt, FaExclamationCircle } from 'react-icons/fa'

import Heading from 'YesterTech/Heading'
import Notice from 'YesterTech/Notice'
import Centered from 'YesterTech/Centered'
import api from 'YesterTech/api'

function useReducerWithMiddleware(
  middleware,
  reducer,
  initialState
) {
  return useReducer(middleware ? middleware(reducer) : reducer, initialState)
}

function logMiddleware(reducer) {
  return (state, action) => {
    const newState = reducer(state, action)
    console.log('================================================')
    console.log('PREVIOUS STATE:\n', state)
    console.log('ACTION:\n', action)
    console.log('NEW STATE:\n', newState)
    console.log('================================================')
    return newState
  }
}

function LoginForm({ onAuthenticated }) {
  const [state, dispatch] = useReducerWithMiddleware(logMiddleware, (state, action) => {
    switch (action.type) {
      case 'LOGGING_IN':
        return { ...state, loading: true }
      case 'LOGIN_ERROR':
        return { ...state, loading: false, error: action.error }
      case 'LOGIN_SUCCESS':
        return { ...state, loading: false, ...action.user, error: null }
      case 'CHANGE_FIELD':
        return { ...state, [action.name]: action.value }
      default:
        return state
    }
  }, {
    username: '',
    password: '',
    error: null,
    loading: null,
    showPassword: false,
  })

  const {
    username,
    password,
    error,
    loading,
    showPassword,
  } = state

  function handleLogin(event) {
    event.preventDefault()

    dispatch({ type: 'LOGGING_IN' })

    api.auth
      .login(username, password)
      .then(user => {
        if (typeof onAuthenticated === 'function') {
          dispatch({ type: 'LOGIN_SUCCESS', ...user })
        }
      })
      .catch(error => {
        dispatch({ type: 'LOGIN_ERROR', error })
      })
  }

  function changeField(e) {
    dispatch({
      type: 'CHANGE_FIELD',
      name: e.target.name,
      value: e.target.type !== 'checkbox' ? e.target.value : e.target.checked,
    })
  }

  return (
    <Centered className="spacing">
      <Heading>Login</Heading>
      <form onSubmit={handleLogin} className="spacing">
        {error && (
          <Notice type="error">
            <FaExclamationCircle />
            <span>{error}</span>
          </Notice>
        )}

        <div className="form-field">
          <input
            aria-label="Username"
            name="username"
            onChange={changeField}
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="form-field">
          <input
            aria-label="Password"
            name="password"
            onChange={changeField}
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
          />
          <label>
            <input
              onChange={changeField}
              defaultChecked={showPassword}
              name="showPassword"
              className="passwordCheckbox"
              type="checkbox"
            />{' '}
            show password
          </label>
        </div>

        <footer>
          <button type="submit" className="button">
            {!loading ? (
              <>
                <FaSignInAlt /> <span>Login</span>
              </>
            ) : (
                <span>Loading ...</span>
              )}
          </button>
        </footer>
      </form>
    </Centered>
  )
}

export default LoginForm
