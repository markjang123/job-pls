import React from 'react';
import PostPriorityItem from './posts_priority_item';
import UserIndexContainer from '../users/users_index_container';
import './post.css'

class PrioritizedPostsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            sorted: false,
            grow: true,
            priority: 'all'  }
            this.priorityMenu = this.priorityMenu.bind(this)
        this.prioritySelector = this.prioritySelector.bind(this)
    }

    componentDidMount() {
        this.props.setLoading();
        if (!this.props.hasUsers) {
            this.props.fetchAllUsers();
        }
        this.props.fetchCurrentUserPostings(this.props.currentUser);
    }

    priorityMenu() {
        return (
            <div class="tabs">
                <input name="tab"
                    className='tab'
                    id="high"
                    type="radio"
                    onClick={() => this.setState({ priority: 'high' })}
                />
                <label for="high">High
                    ({[...new Set(this.props.highPriority)].length})</label>

                <input name="tab"
                    className='tab'
                    id="medium"
                    type="radio"
                    onClick={() => this.setState({ priority: 'medium' })}
                />
                <label for="medium">Medium
                    ({[...new Set(this.props.mediumPriority)].length})
                    </label>

                <input name="tab"
                    className='tab'
                    id="low"
                    type="radio"
                    onClick={() => this.setState({ priority: 'low' })}
                />
                <label for="low">Low
                    ({[...new Set(this.props.mediumPriority)].length})
                    </label>

                <input name="tab"
                    className='tab'
                    id="jobs"
                    type="radio"
                    onClick={() => this.setState({ priority: 'all' })}
                />
                <label for="jobs">All Jobs
                    ({[...new Set(this.props.prioritizedPosts)].length})
                    </label>
            </div>
        )
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

    prioritySelector(priority){

        let { 
            prioritizedPosts, 
            highPriority, 
            mediumPriority, 
            lowPriority } = this.props

        switch(priority){
            case ('all'):
                return (
                    < div className = 'job-priority-container' >
                    {
                        prioritizedPosts.reverse().map(post => (
                            <PostPriorityItem
                                prority={post.priority}
                                post={post}
                                key={post._id}
                                currentUser={this.props.currentUser}
                                modal={this.props.modal}
                                openModal={this.props.openModal}
                                closeModal={this.props.closeModal}
                            />
                        ))
                    }
                    </div>

                );
            case ('high'):
                return (
                    <div className='job-priority-container'>
                        {
                            highPriority.map(post => (
                                <PostPriorityItem
                                    prority={post.priority}
                                    post={post}
                                    key={post._id}
                                    currentUser={this.props.currentUser}
                                    modal={this.props.modal}
                                    openModal={this.props.openModal}
                                    closeModal={this.props.closeModal}
                                />
                            ))
                        }
                    </div>

                );
            case ('medium'):
                return (
                    <div className='job-priority-container'>
                        {
                            mediumPriority.map(post => (
                                <PostPriorityItem
                                    prority={post.priority}
                                    post={post}
                                    key={post._id}
                                    currentUser={this.props.currentUser}
                                    modal={this.props.modal}
                                    openModal={this.props.openModal}
                                    closeModal={this.props.closeModal}
                                />
                            ))
                        }
                    </div>

                );
            case ('low'):
                return (
                    <div className='job-priority-container'>
                        {
                            lowPriority.map(post => (
                                <PostPriorityItem
                                    prority={post.priority}
                                    post={post}
                                    key={post._id}
                                    currentUser={this.props.currentUser}
                                    modal={this.props.modal}
                                    openModal={this.props.openModal}
                                    closeModal={this.props.closeModal}
                                />
                            ))
                        }
                    </div>

                );
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

        let { priority } = this.state
        
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
                        <div className='menu-header'>My Jobs by priority</div>
                        {this.priorityMenu()}
                        {this.prioritySelector(priority, currentUser)}
                        {/* <div className='job-priority-container'>
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
                            ))} */}
                        {/* </div> */}
                    </div>   
            )
        }
    }
}

export default PrioritizedPostsContainer;
