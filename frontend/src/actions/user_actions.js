import * as APIUserUtil from '../util/user_api_util'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const RECEIVE_USER = 'RECEIVE_USER'

export const receiveUsers = users => {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export const receiveUser = _id => ({
    type: RECEIVE_USER,
    _id
});

export const fetchAllUsers = () => {
    return dispatch => {
        return APIUserUtil.fetchAllUsers()
            .then(response => {
                dispatch(receiveUsers(response.data))
            })
    }
}


export const fetchUser = userId => dispatch => {
    return APIUserUtil.fetchUser(userId)
        .then(user => dispatch(receiveUser(user)))
}