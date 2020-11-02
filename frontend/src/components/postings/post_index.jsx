import React from 'react';
import PostIndexItem from './post_index_item';
import { Link } from 'react-router-dom'
import './post.css'
import UserIndexContainer from '../users/users_index_container';

class PostIndex extends React.Component{
    constructor(props){
        super(props);
        this.openUsersIndex = this.openUsersIndex.bind(this);
        // this.showMySavedJobs = this.showMySavedJobs.bind(this)
    }

    componentDidMount(){
        this.props.fetchPostings()
    }

    openUsersIndex(openUsers){
        if (openUsers){
            return(
                <UserIndexContainer />
            )
        } else {
            return null;
        }
    }




    render(){
        const { posts, myPosts, openModal, closeModal, modal, currentUser, openUsers } = this.props;
        if (posts === undefined) return null;
        return(
            <div className='index-container'>
                <div className='jobs-grid'>
                    {posts.map(post => (
                            <PostIndexItem className='job'
                            post={post}
                            key={post._id}
                            currentUser={currentUser}
                            modal={modal}
                            openModal={openModal}
                            closeModal={closeModal}
                        />
                    ))}
                </div>
                <div className='index-users-index'>
                    {this.openUsersIndex(openUsers)}
                </div>
            </div>
        )
        debugger
    }
}

export default PostIndex;
