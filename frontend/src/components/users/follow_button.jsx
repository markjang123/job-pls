import React from 'react';
import {useSelector} from 'react-redux'
class FollowButton extends React.Component {
    constructor(props) {
        super(props)
        this.followUser = this.followUser.bind(this)
    }
    followUser(){
        debugger
        const {currentUser, user} = this.props
        user.following_users.push(currentUser._id)
        this.props.updateAUser(user._id, {following_users: user.following_users})
        currentUser.followed_users.push(user._id)
        this.props.updateAUser(currentUser._id, {followed_users: currentUser.followed_users})
    }
    render(){
        debugger
        return <button onClick={this.followUser} className="follow-button">follow</button>
    }
}

export default FollowButton;