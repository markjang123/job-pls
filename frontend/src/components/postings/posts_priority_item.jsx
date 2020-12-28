import React from 'react';
import PostShowContainer from './post_show_container';
import './post.css';


class PostPriorityItem extends React.Component {
    constructor(props) {
        super(props);
        this.showPost = this.showPost.bind(this);
        this.modeFunc = this.modeFunc.bind(this);
        // this.priorityMenu = this.priorityMenu.bind(this);
    }

    showPost(post) {
        return (
            <PostShowContainer post={post} />
        )
    }

    modeFunc(props) {
        const modalObject = ({
            type: 'post',
            modal: 'post',
            proc: props
        })
        this.props.openModal(modalObject);
        document.body.style.position = 'fixed';
    }

    // priorityMenu() {
        // return (
            // <div></div>
            // <div class="tabs">
            //     <input name="tab"
            //         className='tab'
            //         id="followers"
            //         type="radio"
            //         onClick={() => this.setState({ priority: 'High' })}
            //     />
            //     <label for="followers">High
            //         ({[...new Set(this.props.currentUser.following_users)].length})</label>

            //     <input name="tab"
            //         className='tab'
            //         id="following"
            //         type="radio"
            //         onClick={() => this.setState({ priority: 'Medium' })}
            //     />
            //     <label for="following">Medium
            //         ({[...new Set(this.props.currentUser.followed_users)].length})
            //         </label>

            //     <input name="tab"
            //         className='tab'
            //         id="users"
            //         type="radio"
            //         onClick={() => this.setState({ priority: 'Low' })}
            //     />
            //     <label for="users">Low
            //         ({[...new Set(this.props.users)].length})
            //         </label>

            //     <input name="tab"
            //         className='tab'
            //         id="users"
            //         type="radio"
            //         onClick={() => this.setState({ priority: 'All' })}
            //     />
            //     <label for="users">All Jobs
            //         ({[...new Set(this.props.users)].length})
            //         </label>
            // </div>
        // )
    // }

    idSelector(priority){
        switch(priority){
            case (3):
                return 'job-priority-three';
            case (2):
                return 'job-priority-two';
            case (1):
                return 'job-priority-one';
            default:
                return 'job-priority-white';
        }
    }

    render() {

        const { post } = this.props;



        return (
            <div className={this.idSelector(post.priority)} id="card" onClick={() => this.modeFunc(this.props)}>
                    <div className='job-priority-data'>
                        <ul>
                            <li id='job-title'>
                                {post.job_title}
                            </li>
                            <li id='company'>
                                {post.company}
                            </li>
                            <li>
                                {post.status}
                            </li>
                            <li id='salary'>
                                {post.salary}
                            </li>
                        </ul>
                    </div>
                </div>
        )
    }
}

export default PostPriorityItem;