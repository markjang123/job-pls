import React from 'react';
import PostEdit from './post_edit'

class PostShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {editing: false};
    }

    niceDescription(text){

        return text.replace(/<style[^>]*>.*<\/style>/gm, '')
        .replace(/<script[^>]*>.*<\/script>/gm, '')
        .replace(/<[^>]+>/gm, '')
        .replace(/([\r\n]+ +)+/gm, '');
    }

    render(){
        
        let { post, currentUser } = this.props.post
        let { closeModal } = this.props
        let job_desc;
        if (post.snippet === undefined){
            job_desc = post.description
        } else {
            job_desc = post.snippet
        }
        
        return(
            <div className='post-show'>
                <p id='show-title'>{post.job_title}</p>
                <p id='show-company'>{post.company}</p>
                <p id='show-salary'>{post.salary}</p>
                <div className='description-container'>
                    <p>{this.niceDescription(job_desc)}</p>
                </div>
                <PostEdit 
                    closeEdit={() => this.setState({editing: false})} 
                    currentUser={currentUser} 
                    updateAPosting={this.props.updateAPosting} 
                    post={post}
                    closeModal={closeModal}
                />
            </div>
        )
        
    }
}


export default PostShow;