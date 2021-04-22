import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './user_menu.css';
import UsersIndexItem from './user_index_item';
import UsersIndex from './users_index'
import { fetchAllUsers } from '../../actions/user_actions';

function UserMenu(){
    const [tab, setTab] = useState('users')
    const currentUser = useSelector((state => state.session.user))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllUsers())        
    }, [])

    const users = Object.values(useSelector((state => state.entities.users)))
  
    function userIsFollowing(){
        const userFollows = users.filter( user => currentUser.followed_users.includes(user._id))

        return(
            <div className='users-index-item-container'>
                {userFollows.map(user => {
                    return <UsersIndexItem key={user._id} currentUser={currentUser} user={user} />
                })}
            </div>
        )
    }

    function userIsFollowedBy(){
        const usersFollowers = users.filter( user => currentUser.following_users.includes(user._id))
        return <UsersIndex users={usersFollowers}/>
    }


    function renderTab(tab) {
        switch (tab) {
            case 'users':
                return (
                    <div className='users-index-item-container'>
                        {users.map(user => {
                            if (user._id === currentUser._id) return null
                            return <UsersIndexItem key={user._id} currentUser={currentUser} user={user} />
                        })}
                    </div>
                )
            case "followers":
                    return userIsFollowedBy()
            case "following":
                    return userIsFollowing()
            default:
                return;
        }
    }

    function setNewTab(tabName) {
        setTab(tabName);
    }

    function usersMenu(){
        return(
            <div className="tabs">
                <input name="ftab"
                    className='tab'
                    id="followersTab"
                    type="radio"
                    onClick={() => setNewTab('followers')}
                    defaultChecked={tab === 'followers'}
                    />
                <label htmlFor="followersTab">Followers
                    ({[...new Set(currentUser.following_users)].length})</label>

                <input name="ftab"
                    className='tab'
                    id="followingTab"
                    type="radio"
                    onClick={() => setNewTab('following')}
                    defaultChecked={tab === 'following'}
                    />
                <label htmlFor="followingTab">Following
                    ({[...new Set(currentUser.followed_users)].length})
                    </label>

                <input name="ftab"
                    className='tab'
                    id="usersTab"
                    type="radio"
                    onClick={() => setNewTab('users')}
                    defaultChecked={tab === 'users'}
                    />
                <label htmlFor="usersTab">All Users 
                    ({[...new Set(users)].length})
                    </label>
            </div>
        )
    }

    if (!!Object.values(currentUser).length){
        return (
            <div className='user-menu' onClick={e => e.stopPropagation()}>
                <div className='menu-header' onClick={e => e.stopPropagation()}>
                    Contacts
                </div>

                <div className='user-tabs-container' onClick={e => e.stopPropagation()}>
                    {usersMenu()}
                    {renderTab(tab)}
                </div> 
            </div>
        )}
    return null
}

export default UserMenu;