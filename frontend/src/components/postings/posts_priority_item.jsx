import React from 'react';
import { useDispatch } from 'react-redux'

import PostShow from './post_show';
import { openModal } from '../../actions/modal_actions'
import './post.css';

function PostPriorityItem({post}){
    const dispatch = useDispatch()

    function showPost(post){
        return (
            <PostShow post={post} />
        )
    }

    function modeFunc(post){
        const modalObject = ({
            type: 'post',
            modal: 'post',
            post: post
        })
        dispatch(openModal(modalObject))
        document.body.style.position = 'fixed';
    }

    function idSelector(priority){
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

    function statusBar(){
        let status = post.status
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


        return (
            <div className={idSelector(post.priority)} id="card" onClick={() => modeFunc(post)}>
                    <div className='job-priority-data'>
                            <div id='job-title'>
                                {post.job_title}
                            </div>
                            <div id='company'>
                                {post.company}
                            </div>
                            <div>
                                {statusBar()}
                            </div>
                            <div id='salary'>
                                {post.salary}
                            </div>
                    </div>
                </div>
        )
}

export default PostPriorityItem;