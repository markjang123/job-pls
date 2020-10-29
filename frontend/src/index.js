import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'
import {signup} from './util/session_api_util'
import {clearSessionErrors} from '../src/actions/session_actions'
import {fetchAllUsers} from '../src/actions/user_actions'
import {updateAUser} from '../src/actions/user_actions'

document.addEventListener("DOMContentLoaded", () => {
    let store = configureStore()
    window.getState = store.getState
    window.signup = signup
    window.dispatch = store.dispatch
    window.clearSessionErrors = clearSessionErrors
    window.fetchAllUsers = fetchAllUsers
    window.updateAUser = updateAUser
    ReactDOM.render(
      <Root store={store} />,
      document.getElementById('root')
    ) 
  }
  )





