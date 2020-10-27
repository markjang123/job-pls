import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import configureStore from './store/store'
import Root from './components/root'
  let store = configureStore()
ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);



