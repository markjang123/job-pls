import React from 'react';
import PostPriorityItem from './posts_priority_item';
import UserIndexContainer from '../users/users_index_container';
import './post.css'

class PrioritizedPostsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            sorted: false,
            grow: true }
    }

    componentDidMount() {
        this.props.setLoading();
        if (!this.props.hasUsers) {
            this.props.fetchAllUsers();
        }
        this.props.fetchCurrentUserPostings(this.props.currentUser);
    }


    openUsersIndex(openUsers) {
        if (openUsers) {
            return (
                <UserIndexContainer />
            )
        } else {
            return null;
        }
    }

    render() {
        
        let {
            openModal,
            closeModal,
            modal,
            currentUser,
            prioritizedPosts,
            openUsers
        } = this.props;
        
        if (currentUser === undefined) return null

        if (prioritizedPosts === null) {
            return (
                <div className='no-results'>
                    No results to display yet. :&#41;
                </div>
            )
        } else {
            return (
                    <div className='jobs-priority'>
                        <div className='menu-header'>My Jobs by priority</div><br></br>
                        <div className='job-priority-container'>
                            {prioritizedPosts.map(post => (
                                <PostPriorityItem
                                    prority={post.priority}
                                    post={post}
                                    key={post._id}
                                    currentUser={currentUser}
                                    modal={modal}
                                    openModal={openModal}
                                    closeModal={closeModal}
                                />
                            ))}
                        </div>
                    </div>   
            )
        }
    }
}

export default PrioritizedPostsContainer;
