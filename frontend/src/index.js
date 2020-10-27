import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'
import {signup} from './util/session_api_util'
  let store = configureStore()
  document.addEventListener("DOMContentLoaded", () => {
    window.getState = store.getState
    window.signup = signup
    window.dispatch = store.dispatch
    ReactDOM.render(
      <Root store={store} />,
      document.getElementById('root')
    ) 
  }
  )





