import React from 'react'
import { Link } from 'react-router-dom'
import './users_index.css'
import FollowButtonContainer from './follow_button_container'
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
    componentDidUpdate(){
        console.log("Updated")
    }
    render(){

        let { _id, username } = this.props.user
        return(
        <div className="users-index-item">
            <div className="username-container">
                <p className="username" >
                    <Link className="username-link" to={`/users/${_id}`}>{username}</Link>
                </p>
            </div>
            <FollowButtonContainer is_following={this.is_following} forceUpdate={() => this.forceUpdate()} user={this.props.user}/>
        </div>
        ) 
    }
}

export default UsersIndexItem