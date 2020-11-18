import React from 'react';
import PostIndexItem from './post_index_item';
import UserIndexContainer from '../users/users_index_container';
import './post.css'

class PostIndex extends React.Component{
    constructor(props){
        super(props);
        this.openUsersIndex = this.openUsersIndex.bind(this);
        this.state = {sorted: false}
        this.handleClick = this.handleClick.bind(this)
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
    handleClick(){
        this.setState({sorted: true})
    }
    render(){
        debugger
        let { 
            posts, 
            myPosts, 
            openModal, 
            closeModal, 
            modal, 
            currentUser, 
            openUsers 
        } = this.props;
        if (posts === undefined) return null;
        if (this.state.sorted){
            posts = posts.sort((a,b) => b.priority - a.priority)
        } 
        return(
            <div className='index-container'>
                <button onClick = {this.handleClick}className="sort-button">sort by priority</button>
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
