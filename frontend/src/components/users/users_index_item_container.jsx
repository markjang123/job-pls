import React from 'react'
import {connect} from 'react-redux'
import UserIndexItem from './user_index_item'
const mapStateToProps = state => {
    // debugger
    return {
        currentUser: state.entities.users[state.session.user.id]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}

const UserIndexItemContainer = connect(mapStateToProps, mapDispatchToProps)(UserIndexItem)
export default UserIndexItemContainer