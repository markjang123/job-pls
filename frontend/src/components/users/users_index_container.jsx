import React from 'react';
import UsersIndex from './users_index';
import {connect} from 'react-redux';
import {fetchAllUsers, updateAUser} from '../../actions/user_actions'
const mapStateToProps = state => {
    // debugger
    return {
        users: Object.values(state.entities.users),
        currentUser: state.session.user,
        className: "users-index"
    }
} 

const mapDispatchToProps = dispatch => {
    return {
        fetchUsersIfNeeded: () => dispatch(fetchAllUsers()),
        updateAUser: (userId, userData) => dispatch(updateAUser(userId,userData))
    }
}

const UsersIndexContainer = connect(mapStateToProps, mapDispatchToProps)(UsersIndex)
export default UsersIndexContainer