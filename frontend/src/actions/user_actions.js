import * as APIUserUtil from '../util/user_api_util';
import * as APIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';


export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const UPDATE_USER = 'UPDATE_USER';

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

// export const updateAUser = (userId, userData) => {
//     return dispatch => {
//         debugger
//         return APIUserUtil.updateUser(userId, userData)
//                 .then(() => APIUserUtil.fetchUser(userId))
//                 .then(user => {
//                     debugger
//                     dispatch(updateUser(user.data))})
//                 .catch(err => console.log(err))
//     }
// };


export const updateAUser = (userId, userData) => {
    return dispatch => {
        debugger
        return APIUserUtil.updateUser(userId, userData)
            .then((res) => {const { token } = res.data;
                    debugger
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

// export const login = user => dispatch => {
//     // debugger
//     return APIUtil.login(user)
//         .then(res => {const { token } = res.data;
//             localStorage.setItem('jwtToken', token);
//             ;
//             let decoded = jwt_decode(token);
//             decoded.followed_users = res.data.followed_users;
//             decoded.following_users = res.data.following_users;
//             decoded.followed_posting = res.data.followed_posting;
//             dispatch(receiveCurrentUser(decoded))})
//         .catch(err => {
//             dispatch(receiveErrors(err.response.data));
//         }
//     )
// };