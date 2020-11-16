import React from 'react';
import PostIndexItem from './post_index_item';
import UserIndexContainer from '../users/users_index_container';
import './post.css'

class PostIndex extends React.Component{
    constructor(props){
        super(props);
        this.openUsersIndex = this.openUsersIndex.bind(this);
    }

    componentDidMount(){
        this.props.fetchUserPostings(this.props.currentUser);
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
        const { 
            posts, 
            myPosts, 
            openModal, 
            closeModal, 
            modal, 
            currentUser, 
            openUsers 
        } = this.props;
        if (posts === undefined) return null;
        return(
            <div className='index-container'>
                <div className='jobs-grid'>
                    {posts.map(post => (
                            <PostIndexItem 
                                className='job'
                                post={post}
                                key={post._id}
                                currentUser={currentUser}
                                modal={modal}
                                openModal={openModal}
                                closeModal={closeModal
                            }
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
