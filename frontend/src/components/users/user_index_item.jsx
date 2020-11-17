import React from 'react';
import { Link } from 'react-router-dom';
import './users_index.css';
import FollowButtonContainer from './follow_button_container';

class UsersIndexItem extends React.Component {
    constructor(props){
        super(props);
        this.props.fetchUserPostings(this.props.user._id);
        this.forceUpdate = this.forceUpdate.bind(this);
        this.is_following = this.is_following.bind(this);
    }

    is_following(){
        const {user, currentUser} = this.props;
        return (
            user.following_users.includes(currentUser._id)
        )
    }

    render(){
        if (this.props.user === undefined) return null;

        let { _id, username } = this.props.user
        return(
        <div className="users-index-item">
            <div className="username-container">
                <p className="username" >
                    <Link 
                        className="username-link" 
                        to={`/users/${_id}`}>
                            {username}
                    </Link>
                </p>
            </div>

            {/* {this.props.user._id !== this.props.currentUser._id 
            &&  */}
                <FollowButtonContainer 
                    updateAUser={this.props.updateAUser} 
                    is_following={this.is_following} 
                    forceUpdate={() => this.forceUpdate()} 
                    currentUser={this.props.currentUser} 
                    user={this.props.user}
                />
            {/* } */}
        </div>
        ) 
    }
}

export default UsersIndexItem;