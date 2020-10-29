import * as APIUtil from '../util/session_api_util';
import * as UserUtil from '../util/user_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});
<<<<<<< HEAD
=======

export const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
});

export const receiveUserSignIn = () => ({
    type: RECEIVE_USER_SIGN_IN
});

>>>>>>> main
  
export const receiveErrors = errors => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
};

export const logoutUser = () => ({
    type: RECEIVE_USER_LOGOUT
});

export const fetchUsers = () => dispatch => {
    return UserUtil.fetchUsers()
        .then((users => dispatch(receiveUsers(users)))
        , err => dispatch(receiveErrors(err.response.data)))
}


export const signup = user => dispatch => {
    // debugger
    return APIUtil.signup(user)
        .then(res => {const { token } = res.data;
            debugger
            localStorage.setItem('jwtToken', token);
            APIUtil.setAuthToken(token);
            const decoded = jwt_decode(token);
            debugger
            dispatch(receiveCurrentUser(decoded))})
        .catch(err => {
            dispatch(receiveErrors(err.response.data));
        }
<<<<<<< HEAD
=======

>>>>>>> main
    )
};

export const login = user => dispatch => {
    // debugger
    return APIUtil.login(user)
        .then(res => {const { token } = res.data;
            debugger
            localStorage.setItem('jwtToken', token);
            APIUtil.setAuthToken(token);
            const decoded = jwt_decode(token);
<<<<<<< HEAD
            dispatch(receiveCurrentUser(decoded))})
=======
            dispatch(receiveCurrentUser(decoded))
        })
>>>>>>> main
        .catch(err => {
            debugger
            dispatch(receiveErrors(err.response.data));
        }
    )
};

export const clearSessionErrors = () => {
    return dispatch => {
        dispatch(receiveErrors({}))
    }
}
export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken')
    APIUtil.setAuthToken(false)
    dispatch(logoutUser())
};