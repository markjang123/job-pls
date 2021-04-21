import React from 'react';
import { useSelector } from 'react-redux'
import NavSearch from './NavSearch';
import PostIndex from '../postings/post_index';
import './nav.css'


function Nav(){

    const isCurrentUser = useSelector((state => state.session.user))
    const currentUser = Object.values(isCurrentUser).length === 0 ? false : isCurrentUser

    function openUsers(){
        <PostIndex openUsers={true}/>
    }

    if (currentUser){return <NavSearch currentUserId={currentUser._id}/>}
    return null
}

export default Nav;
