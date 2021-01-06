import React from 'react';
import { Link } from 'react-router-dom';
import './users_index.css';
import FollowButtonContainer from './follow_button_container';


class UsersIndexItem extends React.Component {
    constructor(props){
        super(props);
        this.forceUpdate = this.forceUpdate.bind(this)
        this.is_following = this.is_following.bind(this)
        this.modeFunc = this.modeFunc.bind(this)
    }

    is_following(){
        const {user, currentUser} = this.props;
        return (
            user.following_users.includes(currentUser._id)
        )
    }

       modeFunc(props) {
        const modalObject = ({
            type: 'user',
            modal: 'post',
            proc: props
        })
        this.props.openModal(modalObject);
        document.body.style.position = 'fixed';
    }

   

    render(){
        if (this.props.user === undefined) return null;

        let { _id, username, following_users } = this.props.user

        return (
            <div className='users-index-item' id='username-card'>
                <div className="username-container" onClick={e => e.stopPropagation()}>
                    <div className="username-data" >
                        <div className="user-info">
                            <Link
                                className="username-link"
                                to={`/users/${_id}`}>
                                {username}
                            </Link>
                            <p className="follower-count">{following_users.length === 1 ? "1 follower" : `${following_users.length} followers`} </p>
                            
                        </div>
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