import React from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import './users_index.css';
import FollowButton from './follow_button';



function UsersIndexItem({user}){
    const currentUser = useSelector((state => state.session.user))    
    const { _id, username, following_users } = user

    return (
        <div className='users-index-item' id='username-card'>
            <div className="username-container" onClick={e => e.stopPropagation()}>
                <div className="username-data" >
                    <div className="user-info">
                        <Link
                            className="username-link"
                            to={`/users/${_id}`}
                            userId={_id}>
                            {username}
                        </Link>
                        <p className="follower-count">{following_users.length === 1 ? "1 follower" : `${following_users.length} followers`} </p>
                        
                    </div>
                    <FollowButton
                        currentUser={currentUser}
                        user={user}
                        style={'user-show'}
                    />
                </div>
            </div>

        </div>
    )
}

export default UsersIndexItem;