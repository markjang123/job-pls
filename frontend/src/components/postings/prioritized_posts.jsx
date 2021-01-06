import React from 'react';
import PostPriorityItem from './posts_priority_item';
import { randomKeyGen } from '../../util/helper';
import './post.css';

class PrioritizedPostsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            priority: 'high'  }
        this.priorityMenu = this.priorityMenu.bind(this)
        this.prioritySelector = this.prioritySelector.bind(this)
    }

    componentDidMount(){
        // console.log("post index props",this.props);
        if (this.props.currentUser){
            this.props.setLoading()
            this.props.fetchAllUsers()
                .then(() => this.props.fetchCurrentUserPostings(this.props.currentUser))
        }
    }


    priorityMenu() {
        return (
            <div className="tabs">
                <input name="tab"
                    className='tab'
                    id="high"
                    type="radio"
                    onClick={() => this.setState({ priority: 'high' })}
                />
                <label htmlFor="high">High
                    ({[...new Set(this.props.highPriority)].length})</label>

                <input name="tab"
                    className='tab'
                    id="medium"
                    type="radio"
                    onClick={() => this.setState({ priority: 'medium' })}
                />
                <label htmlFor="medium">Medium
                  ({[...new Set(this.props.mediumPriority)].length})</label>

                <input name="tab"
                    className='tab'
                    id="low"
                    type="radio"
                    onClick={() => this.setState({ priority: 'low' })}
                />
                <label htmlFor="low">Low
                   ({[...new Set(this.props.lowPriority)].length})</label>
            </div>
        )
    }

    prioritySelector(priority){

        let { 
            // prioritizedPosts, 
            highPriority, 
            mediumPriority, 
            lowPriority } = this.props

        switch(priority){
            // case ('all'):
            //     return (
            //         < div className = 'job-priority-container' >
            //         {
            //             prioritizedPosts.map((post, idx) => (
            //                 <PostPriorityItem
            //                     priority={post.priority}
            //                     post={post}
            //                     key={randomKeyGen()}
            //                     currentUser={this.props.currentUser}
            //                     modal={this.props.modal}
            //                     openModal={this.props.openModal}
            //                     closeModal={this.props.closeModal}
            //                 />
            //             ))
            //         }
            //         </div>
            //     );
            case ('high'):
                return (
                    <div className='job-priority-container'>
                        {
                            highPriority.map(post => (
                                <PostPriorityItem
                                    priority={post.priority}
                                    post={post}
                                    key={randomKeyGen()}
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
                                    priority={post.priority}
                                    post={post}
                                    key={randomKeyGen()}
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
                                    priority={post.priority}
                                    post={post}
                                    key={randomKeyGen()}
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
            // openModal,
            // closeModal,
            // modal,
            currentUser,
            prioritizedPosts,
            highPriority, 
            mediumPriority, 
            lowPriority 

        } = this.props

        let { priority } = this.state



        
        if (currentUser === undefined) return null

        
        // if (prioritizedPosts === null) {
            // if (prioritizedPosts === null) {
        if (highPriority.length === 0 && mediumPriority.length === 0 & lowPriority.length === 0){
            return (
                <div className='user-menu'>
                    <div className='menu-header'>My Jobs by priority</div>
                    {this.priorityMenu()}
                    <div className='no-results'>
                        You haven't saved and prioritized any jobs yet! hit the search! :&#41;
                    </div>
                </div>
            )
        } else {
            return (
                    <div className='user-menu'>
                        <div className='menu-header'>My Jobs by priority</div>
                        {this.priorityMenu()}
                        {this.prioritySelector(priority)}
                    </div>   
            )
        }
    }
}

export default PrioritizedPostsContainer;
