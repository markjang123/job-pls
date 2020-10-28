import React from 'react';
import PostShowContainer from './post_show_container';

class PostIndexItem extends React.Component{
    constructor(props){
        super(props);
        //modal goes here
        this.sohwPost = this.showPost.bind(this);
    }

    showPost(post){
        return(
            <PostShowContainer post={post}/>
        )
    }


    render(){
        const { post } = this.props;

        return(
            <div onClick={() => this.showPost(post)}>
                <ul>
                    <li>{post.job_title}</li> 
                    <li>{post.company}</li>
                    <li>{post.salary}</li>
                </ul>
                <ul>
                    <li>{post.status}</li>
                </ul>
            </div>
        )
    }
}

export default PostIndexItem;