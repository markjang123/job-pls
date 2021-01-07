import React from 'react';
import PostShowContainer from './post_show_container';
import './post.css';


class PostPriorityItem extends React.Component {
    constructor(props) {
        super(props);
        this.showPost = this.showPost.bind(this);
        this.modeFunc = this.modeFunc.bind(this);
        this.statusBar = this.statusBar.bind(this)

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

    statusBar(){
        let status = this.props.post.status
        let id = 'two-prog'

        if ( status === "Haven't applied" ){
            id = 'two-prog'
        } else if ( status === 'Call Back'){
            id ='three-prog'
        } else if ( status === 'Phone Interview'){
            id ='four-prog'
        } else if ( status === 'On-site Interview'){
            id ='five-prog'
        } else if ( status === 'On-site Interview'){
            id ='six-prog'
        } else if ( status === 'Offer Received'){
            id ='seven-prog'
        } else if ( status === 'Offer Accepted'){
            id ='eight-prog'
        }

        return(
            <div className='prog-bar-priority-container'>
                <div className='prog-priority' id={id}>

                </div>

            </div>
        )
    }

    render() {

        const { post } = this.props;
        return (
            <div className={this.idSelector(post.priority)} id="card" onClick={() => this.modeFunc(this.props)}>
                    <div className='job-priority-data'>
                            <div id='job-title'>
                                {post.job_title}
                            </div>
                            <div id='company'>
                                {post.company}
                            </div>
                            <div>
                                {/* {post.status} */}
                                {this.statusBar()}
                            </div>
                            <div id='salary'>
                                {post.salary}
                            </div>
                    </div>
                </div>
        )
    }
}

export default PostPriorityItem;