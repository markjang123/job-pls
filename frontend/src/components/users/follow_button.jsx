import React from 'react';
import './users_index.css';

class FollowButton extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {following: this.props.is_following()}
        this.followUser = this.followUser.bind(this)
        this.unfollowUser = this.unfollowUser.bind(this)
        this.styling = this.styling.bind(this)
    }

    followUser(e){
        e.preventDefault();
        e.stopPropagation();

        const {currentUser, user} = this.props
        user.following_users.push(currentUser._id)
        currentUser.followed_users.push(user._id)
        this.props.updateAUser(user._id, {following_users: [...new Set(user.following_users)]})
        this.props.updateTheCurrentUser(currentUser._id, {followed_users: [...new Set(currentUser.followed_users)]})
            .then(() => this.props.forceUpdate())
    }
    
    unfollowUser(e){
        e.preventDefault();
        e.stopPropagation();

        const {currentUser, user} = this.props
        const followIdx = user.following_users.findIndex(ele => ele === currentUser._id)
        user.following_users.splice(followIdx, 1)
        this.props.updateAUser(user._id, {following_users: [...new Set(user.following_users)]})
        const followIdx2 = currentUser.followed_users.findIndex(ele => ele === user._id)
        currentUser.followed_users.splice(followIdx2, 1)
        this.props.updateTheCurrentUser(currentUser._id, {followed_users: [...new Set(currentUser.followed_users)]})
            .then(() => this.props.forceUpdate())

    }


    styling(style) {
        switch (style) {
            case ('user-show'):
                    return 'users-show-follow-button';
                default:
                    return 'follow-button';
        }
    }

    render(){
        let { style } = this.props.style
        if(this.props.user._id === this.props.currentUser._id){
            return null;
        }
        return (
            <div>
                <br></br>

                <button
                    onClick={
                        this.props.is_following()
                            ? e => this.unfollowUser(e)
                            : e => this.followUser(e)}
                    id={
                        this.props.is_following()
                            ? "followings"
                            : "follows"}
                    className={this.styling(style)}>
                    {this.props.is_following()
                        ? "following"
                        : "follow"}
                </button>
            </div>
        );
    }
}

export default FollowButton;