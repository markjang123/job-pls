import React, {useState} from 'react';
import { useDispatch} from 'react-redux'
import { updateAUser, updateTheCurrentUser } from '../../actions/user_actions';
import './users_index.css';

function FollowButton({user, style, currentUser}){
    const [toggle, setToggle] = useState(true)

    const dispatch = useDispatch()


    function is_following(user, currentUser){
        const bool = user.following_users.includes(currentUser._id)
        return bool
    }


    function followUser(e){
        e.preventDefault();
        e.stopPropagation();

        user.following_users.push(currentUser._id)
        currentUser.followed_users.push(user._id)
        dispatch(updateAUser(user._id, {following_users: [...new Set(user.following_users)]}))
        dispatch(updateTheCurrentUser(currentUser._id, {followed_users: [...new Set(currentUser.followed_users)]}))
            .then(() => setToggle(oldState => !oldState))
    }
    
    function unfollowUser(e){
        e.preventDefault();
        e.stopPropagation();

        const followIdx = user.following_users.findIndex(ele => ele === currentUser._id)
        user.following_users.splice(followIdx, 1)
        dispatch(updateAUser(user._id, {following_users: [...new Set(user.following_users)]}))
        const followIdx2 = currentUser.followed_users.findIndex(ele => ele === user._id)
        currentUser.followed_users.splice(followIdx2, 1)
        dispatch(updateTheCurrentUser(currentUser._id, {followed_users: [...new Set(currentUser.followed_users)]}))
            .then(() => setToggle(oldState => !oldState))
    }

    function styling(style) {
        switch (style) {
            case ('user-show'):
                    return 'users-show-follow-button';
                default:
                    return 'follow-button';
        }
    }

   
    return (
        <div>
            <br></br>
            <button
                onClick={
                    is_following(user, currentUser)
                        ? e => unfollowUser(e)
                        : e => followUser(e)}
                id={
                    is_following(user, currentUser)
                        ? "followings"
                        : "follows"}
                className={styling(style)}>
                {is_following(user, currentUser)
                    ? "following"
                    : "follow"}
            </button>
        </div>
    );
}

export default FollowButton;