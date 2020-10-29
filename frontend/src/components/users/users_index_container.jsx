import React from 'react';
import UsersIndex from './users_index';
import {connect} from 'react-redux';
import {fetchAllUsers} from '../../actions/user_actions'
const mapStateToProps = state => {
    return {
        users: Object.values(state.entities.users)
    }
} 

const mapDispatchToProps = dispatch => {
    return {
        fetchAllUsers: () => dispatch(fetchAllUsers())
    }
}

const UsersIndexContainer = connect(mapStateToProps, mapDispatchToProps)(UsersIndex)
export default UsersIndexContainer