import React from 'react';
import PostShowContainer from './post_show_container';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';


class PostIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.showPost = this.showPost.bind(this);
        this.modeFunc = this.modeFunc.bind(this);
    }

    componentDidMount(){
        <PostShowContainer post={this.props.post} />

    }

    showPost(post){
        console.log(post.job_title)
        return(
            // console.log(post._id),
            <PostShowContainer post={post}/>
        )
    }

    modeFunc(post){
        const modalObject = ({
            type: 'post',
            modal: 'post',
            proc: post
        })
        this.props.openModal(modalObject);
    }





    render(){
        const { post } = this.props;
        // console.log(!!openModal);

        return(
            <div>
                {/* <Link to={`/jobs/${post._id}`}> */}
                <ul>
                    <li>{post.job_title}</li> 
                    <li>{post.company}</li>
                    <li>{post.salary}</li>
                </ul>
                <ul>
                    <li>{post.status}</li>
                    <li>{console.log(post.currentUser)}</li>
                </ul>
                {/* </Link> */}
                {/* <button onClick={() => openModal(post)}>Modal Time</button> */}
                <button onClick={() => this.modeFunc(post) }>Modal Time</button>
            </div>
        )
    }
}

export default PostIndexItem;