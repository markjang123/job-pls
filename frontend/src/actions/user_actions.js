import * as APIUserUtil from '../util/user_api_util'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const UPDATE_USER = 'UPDATE_USER'
export const receiveUsers = users => {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export const updateUser = user => {
    debugger
    return {
        type: UPDATE_USER,
        user
    }
}

export const fetchAllUsers = () => {
    return dispatch => {
        return APIUserUtil.fetchAllUsers()
            .then(response => {
                dispatch(receiveUsers(response.data))
            })
    }
}

export const updateAUser = (userId, userData) => {
    debugger
    return dispatch => {
        return APIUserUtil.updateUser(userId, userData)
                .then(() => APIUserUtil.fetchUser(userId))
                .then(user => dispatch(updateUser(user.data)))
                .catch(err => console.log(err))
    }
}