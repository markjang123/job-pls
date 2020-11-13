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

        return(
            <div className='post-show'>
                <p id='show-title'>
                    {post.job_title}
                </p>
                <p id='show-company'>
                    {post.company}
                </p>
                <p id='show-salary'>
                    {post.salary}
                </p>
                <p>
                    {this.niceDescription(post.description)}
                </p>
                <button 
                    id="edit-button" 
                    onClick={() => 
                        this.setState({editing: !this.state.editing})}>
                            {this.state.editing 
                            ? "Close" 
                            : "Edit"}
                </button>
                {this.state.editing 
                && <PostEdit closeEdit={() => 
                    this.setState({editing: false})} 
                    currentUser={currentUser} 
                    updateAPosting={this.props.updateAPosting} 
                    post={post}/>
                }
            </div>
        )
        
    }
}


export default PostShow;