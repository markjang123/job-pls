import React from 'react'
import {connect} from 'react-redux'
import FollowButton from './follow_button'
import {updateAUser} from '../../actions/user_actions'
const mapStateToProps = state => {
    return {
        currentUser: state.session.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateAUser: (userId, userData) => dispatch(updateAUser(userId, userData))
    }
}

const FollowButtonContainer = connect(mapStateToProps, mapDispatchToProps)(FollowButton)
export default FollowButtonContainer