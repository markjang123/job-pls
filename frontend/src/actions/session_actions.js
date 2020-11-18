import * as APIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN"

export const receiveCurrentUser = currentUser => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    }
};

const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
});

const receiveErrors = errors => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
};

const logoutUser = () => ({
    type: RECEIVE_USER_LOGOUT
});

export const signup = user => dispatch => {
    return APIUtil.signup(user)
        .then(res => {const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            APIUtil.setAuthToken(token);
            let decoded = jwt_decode(token);
            dispatch(receiveCurrentUser(decoded))})
        .catch(err => {
            dispatch(receiveErrors(err.response.data));
        }
    )
};

export const login = user => dispatch => {
    return APIUtil.login(user)
        .then(res => {const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            APIUtil.setAuthToken(token);
            let decoded = jwt_decode(token);
            dispatch(receiveCurrentUser(decoded))})
        .catch(err => {
            dispatch(receiveErrors(err.response.data));
        }
    )
};

export const clearSessionErrors = () => {
    return dispatch => {
        dispatch(receiveErrors({}))
    };
};

export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken');
    APIUtil.setAuthToken(false);
    dispatch(logoutUser());
};