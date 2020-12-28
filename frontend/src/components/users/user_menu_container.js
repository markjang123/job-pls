import React from 'react';
import UserMenu from './user_menu';
import { connect } from 'react-redux';
import { fetchAllUsers, updateAUser, updateTheCurrentUser } from '../../actions/user_actions';

const mSTP = (state) => {
    return {
        users: Object.values(state.entities.users),
        user: state.entities.users,
        currentUser: state.session.user,
        className: "users-index",
        hasUsers: !!Object.keys(state.entities.users).length
    }
}

const mDTP = dispatch => {
    return {
        updateAUser: (userId, userData) => dispatch(updateAUser(userId, userData)),
        updateTheCurrentUser: (userId, userData) => dispatch(updateTheCurrentUser(userId, userData))
    }
}

export default connect(mSTP, mDTP)(UserMenu);
