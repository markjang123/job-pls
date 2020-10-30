import React from 'react';


class PostShow extends React.Component{
    constructor(props){
        super(props)
    }

    // componentDidMount(){
        // this.props.fetchPosting(this.props.match.params.jobId);
        // console.log(this.props.post)
    // }

    render(){
        let { post, currentUser } = this.props.post
        // let { posts } = this.props;
        // if (!posts) return null;

        return(
            <div>
                <h1>{post.job_title}</h1>
                <h3>{post.company}</h3>
                <h3>{post.salary}</h3>
                <p>{post.description}</p>
                <button onClick={() => console.log(currentUser)}>Add To List</button>  
            </div>
        )
        
    }
}


export default PostShow;