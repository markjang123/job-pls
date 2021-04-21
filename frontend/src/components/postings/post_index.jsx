import React, {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux'
import PostIndexItem from './post_index_item';
import { randomKeyGen } from '../../util/helper';
import './post.css'
import { fetchCurrentUserPostings } from '../../actions/posting_actions';
import UsersIndex from '../users/users_index'


function PostIndex({openUsers}){
    
    const posts = useSelector((state => state.session.user.followed_posting))
    const dispatch = useDispatch()

    const currentUser = useSelector((state => state.session.user))

    useEffect(() => {
        dispatch(fetchCurrentUserPostings(currentUser._id))
    }, [])


    function openUsersIndex(openUsers){
        if (openUsers){
            return(
                <UsersIndex/>
            )
        } else {
            return null;
        }
    }

    if (posts.length === 0 ){
        return(
            <div className='no-results'>
                No results to display. How about you search for something? Maybe apply? Maybe save it to your jobs? :&#41;
            </div>
        )
    } else {
        return(
            <div className='index-container'>
                <div className='jobs-grid'>
                    {posts.map((post, idx) => (
                        <PostIndexItem 
                            className='job'
                            post={post}
                            key={randomKeyGen()}
                        />
                    ))}
                </div>
                <div className='index-users-index'>
                    {openUsersIndex(openUsers)}
                </div>
            </div>
        )
    }
}


export default PostIndex;
