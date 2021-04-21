import React from 'react';
import UserIndexItem from './user_index_item';
import { randomKeyGen } from '../../util/helper';
import './users_index.css';


function UsersIndex({users}){

    if(!!users){
        return (
            <div className='users-index'>
                <div className='users-index-item-container' onClick={e => e.stopPropagation()}>
                    {users.map(user => {
                        return <UserIndexItem key={randomKeyGen()} user={user} style={'user-show'} />
                    })}
                </div>
            </div>
        )
    } else {         
         return(
            <div className='no-results'>
                This container is empty! Oh no!
            </div>
        )
    }
}

export default UsersIndex