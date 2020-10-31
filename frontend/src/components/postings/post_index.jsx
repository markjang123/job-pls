import React from 'react';
import PostIndexItem from './post_index_item';
import { Link } from 'react-router-dom'
import './post.css'
import UserIndexContainer from '../users/users_index_container';

class PostIndex extends React.Component{
    constructor(props){
        super(props);
        this.openUsersIndex = this.openUsersIndex.bind(this) 
        // this.openUsers = this.props.openUsers
        
    }

    componentDidMount(){
        this.props.fetchPostings()
    }

    openUsersIndex(openUsers){
        debugger
        if (openUsers){
            return(
                <UserIndexContainer />
            )
        } else {
            return null;
        }
    }



    render(){
        const { posts, openModal, closeModal, modal, currentUser, openUsers } = this.props;
        if (posts === undefined) return null;
        debugger
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
    }
}

export default PostIndex;
