import React from 'react';
import PostShowContainer from './post_show_container';
import './post.css';


class PostPriorityItem extends React.Component {
    constructor(props) {
        super(props);
        this.showPost = this.showPost.bind(this);
        this.modeFunc = this.modeFunc.bind(this);
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