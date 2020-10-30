import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';
// import app_css from './app.css';

const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <App className='app' />
    </HashRouter>
  </Provider>
);

export default Root;