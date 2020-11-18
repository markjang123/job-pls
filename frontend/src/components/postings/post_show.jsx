import React from 'react';
import PostEdit from './post_edit'

class PostShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {editing: false};
    }


    componentDidMount(){
        this.props.fetchPosting(this.props.match.params.jobId);
        // this.props.fetchPosting(this.props.match.params.jobId);
        console.log('logging this.props.post:')
        console.log(this.props.post)
    }



    niceDescription(text){

        return text.replace(/<style[^>]*>.*<\/style>/gm, '')
        .replace(/<script[^>]*>.*<\/script>/gm, '')
        .replace(/<[^>]+>/gm, '')
        .replace(/([\r\n]+ +)+/gm, '');
    }

    render(){
        debugger
        let { post, currentUser } = this.props.post
        let job_desc;
        if (post.snippet === undefined){
            job_desc = post.description
        } else {
            job_desc = post.snippet
        }
        // let { posts } = this.props;
        // if (!posts) return null;

        return(
            <div className='post-show'>
                <p id='show-title'>{post.job_title}</p>
                <p id='show-company'>{post.company}</p>
                <p id='show-salary'>{post.salary}</p>
                {/* <p>{this.niceDescription(post.description)}</p> */}
                <div className='description-container'>
                    <p>{this.niceDescription(job_desc)}</p>
                </div>
                {/* <button id="edit-button" onClick={() => this.setState({editing: !this.state.editing})}>{this.state.editing ? "Close" : "Edit"}</button>
                {this.state.editing && <PostEdit closeEdit={() => this.setState({editing: false})} currentUser={currentUser} updateAPosting={this.props.updateAPosting} post={post}/>} */}
                {/* <button id="edit-button" onClick={() => this.setState({editing: !this.state.editing})}>{this.state.editing ? "Close" : "Edit"}</button> */}
                <PostEdit closeEdit={() => this.setState({editing: false})} currentUser={currentUser} updateAPosting={this.props.updateAPosting} post={post}/>
            </div>
        )
        
    }
}


export default PostShow;