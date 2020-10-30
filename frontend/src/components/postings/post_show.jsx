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
            <div className='post-show'>
                <p id='show-title'>{post.job_title}</p>
                <p id='show-company'>{post.company}</p>
                <p id='show-salary'>{post.salary}</p>
                <p>{post.description}</p>
                <button onClick={() => console.log(currentUser)}>Add To List</button>  
            </div>
        )
        
    }
}


export default PostShow;