import React from 'react'
import { Link } from 'react-router-dom'
import './users_index.css'
import FollowButton from './follow_button'
import UserShowContainer from './user_show_container';

class UsersIndexItem extends React.Component {
    constructor(props){
        super(props)
        this.forceUpdate = this.forceUpdate.bind(this)
        this.is_following = this.is_following.bind(this)
    }
    is_following(){
        debugger
        const {user, currentUser} = this.props
        return user.following_users.includes(currentUser._id)
    }

    render(){

        let { _id, username } = this.props.user
        console.log(this.props.user)
        return(
        <div className="users-index-item">
            <div className="username-container">
                <p className="username" >
                    <Link to={`/users/${_id}`}>{username}</Link>
                </p>
            </div>
            <FollowButton updateAUser={this.props.updateAUser} is_following={this.is_following} forceUpdate={() => this.forceUpdate()} currentUser={this.props.currentUser} user={this.props.user}/>
        </div>
        ) 
    }
}

export default UsersIndexItem