import React from 'react';
import { Link } from 'react-router-dom';
import './users_index.css';
import FollowButtonContainer from './follow_button_container';


class UsersIndexItem extends React.Component {
    constructor(props){
        super(props);
        this.forceUpdate = this.forceUpdate.bind(this)
        this.is_following = this.is_following.bind(this)
        this.styling = this.styling.bind(this)
    }

    is_following(){
        const {user, currentUser} = this.props;
        return (
            user.following_users.includes(currentUser._id)
        )
    }

   

    styling(style){
        switch(style){
            case ('user-show'):
                return 'users-show-index-item';
            default:
                return 'users-index-item';
        }
    }

    render(){
        if (this.props.user === undefined) return null;

        let { _id, username } = this.props.user
        let { style } = this.props

        return (
            <div className={this.styling(style)} id='username-card'>
                <div className="username-container" onClick={e => e.stopPropagation()}>
                    <div className="username-data" >
                        <Link
                            className="username-link"
                            to={`/users/${_id}`}>
                            {username}
                        </Link>
                    <FollowButtonContainer
                        updateAUser={this.props.updateAUser}
                        is_following={this.is_following}
                        forceUpdate={() => this.forceUpdate()}
                        currentUser={this.props.currentUser}
                        user={this.props.user}
                        style={'user-show'}
                    />
                    </div>
                </div>

            </div>
        )
    }
}

export default UsersIndexItem;