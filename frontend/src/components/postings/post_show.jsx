import React from 'react';


class PostShow extends React.Component{
    constructor(props){
        super(props)
        this.addJob = this.addJob.bind(this);

    }


    addJob(e){
        e.preventDefault();
        // this.props.addPost(this.props.post.id).then(
            this.props.post.status = 'interested'
        // )
    }

    render(){
        let { post } = this.props;
        if (!post) return null;

        return(
            <div>
                <div>
                <h1>{post.job_title}</h1>
                <h3>{post.company}</h3>
                <p>{post.description}</p>
                <button onClick={this.addJob}>Add to Your List</button>
                </div>
            </div>
        )
    }
}


export default PostShow;