import * as APIUserUtil from '../util/user_api_util';
import * as APIUtil from '../util/session_api_util';
import * as postingAPIUtil from '../util/posting_api_util';

import jwt_decode from 'jwt-decode';
import {
    receiveCurrentUser
} from './session_actions';
import {
    setCurrentPosting,
} from './posting_actions';


export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const SAVE_POSTING_TO_USER = 'SAVE_POSTING_TO_USER';

export const receiveUsers = users => {
    return {
        type: RECEIVE_USERS,
        users
    }
};

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

export const updateUser = user => {
    return {
        type: UPDATE_USER,
        user
    }
};

export const savePostingToUser = (userId, posting) => dispatch => {
    return APIUserUtil.savePostingToUser(userId, posting)
    .then(user => {
        let newPost = user.data.followed_posting[user.data.followed_posting.length -1] || [];
        dispatch(receiveCurrentUser(user.data));
        return postingAPIUtil.getPosting(newPost)
        .then( currentPosting => dispatch(setCurrentPosting(currentPosting.data)))
    })
    .catch(err => {
        console.log(err);
    });
};

export const fetchAllUsers = () => {
    return dispatch => {
        return APIUserUtil.fetchAllUsers()
            .then(response => {
                dispatch(receiveUsers(response.data))
            })
    }
};


export const fetchUser = userId => dispatch => {
    return APIUserUtil.fetchUser(userId)
        .then(user => dispatch(receiveUser(user.data)))
};

export const updateAUser = (userId, userData) => {
    return dispatch => {
        return APIUserUtil.updateUser(userId, userData)
            .then((res) => {const { token } = res.data;
                    localStorage.setItem('jwtToken', token);
                    APIUtil.setAuthToken(token);
                    const decoded = jwt_decode(token);
                    dispatch(updateUser(decoded));
                }
            )
            .catch(err => console.log(err)
        )
    }
};