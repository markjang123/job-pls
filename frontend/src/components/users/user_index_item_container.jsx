import React from 'react'
import {connect} from 'react-redux'
import UserIndexItem from './user_index_item'
const mapStateToProps = state => {
    return {
        state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}

const UserIndexItemContainer = connect(mapStateToProps, mapDispatchToProps)(UserIndexItem)
export default UserIndexItemContainer