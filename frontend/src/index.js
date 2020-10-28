import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'
import {signup} from './util/session_api_util'
import {clearSessionErrors} from '../src/actions/session_actions'

  let store = configureStore()
  document.addEventListener("DOMContentLoaded", () => {
    window.getState = store.getState
    window.signup = signup
    window.dispatch = store.dispatch
    window.clearSessionErrors = clearSessionErrors
    ReactDOM.render(
      <Root store={store} />,
      document.getElementById('root')
    ) 
  }
  )





