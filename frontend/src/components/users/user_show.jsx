import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import UserPostsIndex from '../postings/user_posts_index';
import UserFollowIndexContainer from './user_follow_index_container';
import UserIndex from './users_index'
import { useParams } from 'react-router-dom'
import './user_show.css';
import './users_index.css';

function UserShow(){
    const [ tab, setTab] = useState('followers')

    const {userId} = useParams()    
    const users = useSelector((state => state.entities.users))
    const user = users[userId]

    function renderTab(){
        switch(tab){
            case "followers":
                return <UserFollowIndexContainer 
                    users={[...new Set(user.following_users)].map(userId => 
                        users[userId]
                    )} />;
            case "following":
                return <UserFollowIndexContainer 
                    users={[...new Set(user.followed_users)].map(userId => 
                        users[userId]
                    )} />;
            default:
                return;
        };
    }

    function showTabIsSelected(tabName,tab){
        return tabName === tab ? 'selectedShowTab' : null
    }

    function setNewTab(e, tabName) {
        e.preventDefault();
        e.stopPropagation();
        setTab(tabName);
    }
    

    if (!!user){
        return(
            <div className="user-show-container" onClick={e => e.stopPropagation()}>
                <div className="profile-content" onClick={e => e.stopPropagation()}>
                    <div className='tabs-container' onClick={e => e.stopPropagation()}>
                        <div id="user-show-username">
                                {user.username}
                        </div>
                        <div className='tabs' onClick={e => e.stopPropagation()}>
                            <div
                                className="tab"
                                onClick={e => setNewTab( e, 'followers')}
                                id={showTabIsSelected('followers',tab )}
                                >
                                Followers ({[...new Set(user.following_users)].length})
                            </div>
                            <div
                                className="tab"
                                onClick={e => setNewTab( e, 'following')}
                                id={showTabIsSelected('following',tab )}
                                >
                                Following ({[...new Set(user.followed_users)].length})
                            </div>
                        </div>
                    
                        <div className='tab' onClick={e => e.stopPropagation()}>
                            {renderTab()}
                        </div>
                    </div> 
    
                    <UserPostsIndex userId={userId}/>
                </div>
            </div>
        )
    }

    return null

}

export default UserShow