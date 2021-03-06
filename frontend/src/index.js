import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';
import {fetchAllUsers} from '../src/actions/user_actions';
import {updateAPosting} from '../src/actions/posting_actions';

document.addEventListener("DOMContentLoaded", () => {
    let store;

    if (localStorage.jwtToken) {
        setAuthToken(localStorage.jwtToken);
        const decodedUser = jwt_decode(localStorage.jwtToken);
        const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };
        store = configureStore(preloadedState);
        const currentTime = Date.now() / 1000;
        if (decodedUser.exp < currentTime) {
            store.dispatch(logout());
            window.location.href = '/login';
        }
    } else {
        store = configureStore({});
    }

    if(process.env.NODE_ENV !== "production"){
        window.getState = store.getState
        window.dispatch = store.dispatch
        window.fetchAllUsers = fetchAllUsers
        window.updateAPosting = updateAPosting        
    }

    ReactDOM.render(
        <Root store={store} />,
        document.getElementById('root')
    )
});