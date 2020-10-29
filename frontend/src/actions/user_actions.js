import * as APIUserUtil from '../util/user_api_util'

export const RECEIVE_USERS = 'RECEIVE_USERS'

export const receiveUsers = users => {
    debugger
    return {
        type: RECEIVE_USERS,
        users
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