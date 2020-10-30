import React from 'react';
import './users_index.css'
class FollowButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {following: this.props.is_following()}
        this.followUser = this.followUser.bind(this)
        this.unfollowUser = this.unfollowUser.bind(this)
    }
    followUser(){
        // debugger
        const {currentUser, user} = this.props
        user.following_users.push(currentUser._id)
        currentUser.followed_users.push(user._id)
        this.props.updateAUser(currentUser._id, {followed_users: currentUser.followed_users})
        this.props.updateAUser(user._id, {following_users: user.following_users})
            .then(() => this.props.forceUpdate())
    }
    
    unfollowUser(){
        // debugger
        const {currentUser, user} = this.props
        const followIdx = user.following_users.findIndex(ele => ele === currentUser._id)
        user.following_users.splice(followIdx, 1)
        this.props.updateAUser(user._id, {following_users: user.following_users})
        const followIdx2 = currentUser.followed_users.findIndex(ele => ele === user._id)
        currentUser.followed_users.splice(followIdx2, 1)
        this.props.updateAUser(currentUser._id, {followed_users: currentUser.followed_users})
            .then(() => this.props.forceUpdate())

    }
    render(){
        // debugger
    return <button onClick={this.props.is_following() ? this.unfollowUser : this.followUser} id={this.props.is_following() ? "following" : "follow"} className="follow-button">{this.props.is_following() ? "following" : "follow"}</button>
    }
}

export default FollowButton;