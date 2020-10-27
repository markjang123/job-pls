import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'
  let store = configureStore()
  document.addEventListener("DOMContentLoaded", () => {
    window.getState = store.getState
    ReactDOM.render(
      <Root store={store} />,
      document.getElementById('root')
    ) 
  }
  )





