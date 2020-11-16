import React from 'react';
import UserMenu from './user_menu';
import { connect } from 'react-redux';
import { fetchAllUsers, updateAUser, updateTheCurrentUser } from '../../actions/user_actions';

const mapStateToProps = state => {
    return {
        users: Object.values(state.entities.users),
        currentUser: state.session.user,
        className: "users-index"
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsersIfNeeded: () => dispatch(fetchAllUsers()),
        updateAUser: (userId, userData) => dispatch(updateAUser(userId, userData)),
        updateTheCurrentUser: (userId, userData) => dispatch(updateTheCurrentUser(userId, userData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
