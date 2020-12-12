import React from 'react';
import PostIndexItem from './post_index_item';
import UserIndexContainer from '../users/users_index_container';
import PostPriorityItem from './posts_priority_item';
import './post.css'

class PostIndex extends React.Component{
    constructor(props){
        super(props);
        this.openUsersIndex = this.openUsersIndex.bind(this);
        this.state = {sorted: false}
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        this.props.setLoading();
        if(!this.props.hasUsers){
            this.props.fetchAllUsers();
        }
        this.props.fetchCurrentUserPostings(this.props.currentUser);
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
        
        let { 
            posts, 
            openModal, 
            closeModal, 
            modal, 
            currentUser, 
            openUsers,
            prioritizedPosts
        } = this.props;

        if (posts === undefined) return null;
        if (this.state.sorted){
            posts = posts.sort((a,b) => b.priority - a.priority)
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
                    <div className='jobs-priority'>
                        <div className='job-priority-header'>My Jobs by priority:</div>

                        <div className='job-priority-container'>
                            {prioritizedPosts.map(post => (
                                <PostPriorityItem
                                    prority={post.priority}
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

                    </div>
                    {/* <button onClick = {this.handleClick}className="sort-button">sort by priority</button> */}
                    <div className='jobs-grid'>
                        {posts.reverse().map(post => (
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
}

export default PostIndex;
