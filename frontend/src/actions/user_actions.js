import * as APIUserUtil from '../util/user_api_util';
import * as APIUtil from '../util/session_api_util';
import * as postingAPIUtil from '../util/posting_api_util';

import jwt_decode from 'jwt-decode';
import { RECEIVE_NEW_POSTING } from './posting_actions';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const SAVE_POSTING_TO_USER = 'SAVE_POSTING_TO_USER';
export const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER';
export const UPDATE_CURRENT_USER_POSTINGS = 'UPDATE_CURRENT_USER_POSTINGS';


const receiveUsers = users => {
    return {
        type: RECEIVE_USERS,
        users
    }
};

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

const updateUser = user => {
    return {
        type: UPDATE_USER,
        user
    }
};

const updateCurrentUser = user => {
    return {
        type: UPDATE_CURRENT_USER,
        user
    }
};

const updateCurrentUserPostings = (posting) => {
    return {
        // type: UPDATE_CURRENT_USER_POSTINGS, --- changing this type to RECEIVE_NEW_POSTING didn't seem to yield 
        // the desired change, but I am leaving this in just incase the new type breaks anything. 
        // We can revert to UPDATE_CURRENT_USER_POSTING if RECEIVE_NEW_POSTING breaks anything
        type: RECEIVE_NEW_POSTING,
        posting
    }
};

export const savePostingToUser = (userId, posting) => dispatch => {

    return APIUserUtil.savePostingToUser(userId, posting)
    .then(user => {
        postingAPIUtil.getPosting(user.data.followed_posting[user.data.followed_posting.length -1])
        // return postingAPIUtil.getPosting(user.data.followed_posting[user.data.followed_posting.length -1])
        .then( currentPosting => {
            dispatch(updateCurrentUserPostings(currentPosting));
            // dispatch(updateCurrentUserPostings(currentPosting.data));
        });
    })
    .catch(err => {
        console.log(err);
    });
};

export const fetchAllUsers = () => {
    return dispatch => {
        return APIUserUtil.fetchAllUsers()
            .then(response => {
                dispatch(receiveUsers(response.data));
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
                    // localStorage.setItem('jwtToken', token);
                    // APIUtil.setAuthToken(token);
                    const decoded = jwt_decode(token);
                    dispatch(updateUser(decoded));
                }
            )
            .catch(err => console.log(err)
        )
    }
};

export const updateTheCurrentUser = (userId, userData) => {
    return dispatch => {
        return APIUserUtil.updateUser(userId, userData)
            .then((res) => {const { token } = res.data;
                    // localStorage.setItem('jwtToken', token);
                    // APIUtil.setAuthToken(token);
                    const decoded = jwt_decode(token);
                    dispatch(updateCurrentUser(decoded));
                }
            )
            .catch(err => console.log(err)
        )
    }
};