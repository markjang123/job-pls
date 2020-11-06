import React from 'react';
import UserMenu from './user_menu';
import { connect } from 'react-redux';
import { fetchAllUsers, updateAUser } from '../../actions/user_actions'
const mapStateToProps = state => {
    // debugger
    return {
        users: Object.values(state.entities.users),
        currentUser: state.entities.users[state.session.user.id],
        className: "users-index"
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsersIfNeeded: () => dispatch(fetchAllUsers()),
        updateAUser: (userId, userData) => dispatch(updateAUser(userId, userData))
    }
}

const UserMenuContainer = connect(mapStateToProps, mapDispatchToProps)(UserMenu)
export default UserMenuContainer