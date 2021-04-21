import React, {useEffect} from 'react';
import UserPostsIndexItem from './user_posts_index_item';
import { useSelector, useDispatch} from 'react-redux'
import { fetchUserPostings } from '../../actions/posting_actions';
        
function UserPostsIndex({userId}){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUserPostings(userId))
    }, [userId])
    
    const userPostings = useSelector((state => state.entities.posts.user ))
    const publicPostings = userPostings.filter(job => job.public)

    if (userPostings.length < 1) {
        return(
            <div className='no-results'>
                Looks like this user hasn't saved any jobs yet.
            </div>

        ) 
        
    }

    return <ul className="user-posts-index">
        {publicPostings.reverse().map(job => 
            job === undefined
            ? null
            : <UserPostsIndexItem 
                key={job._id} 
                job={job}
                />
            )}
    </ul>
    }


export default UserPostsIndex;