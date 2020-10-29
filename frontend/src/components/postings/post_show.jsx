import React from 'react';


class PostShow extends React.Component{
    constructor(props){
        super(props)
    

    }

    componentDidMount(){
        // this.props.fetchPosting(this.props.match.params.jobId);
        // console.log(this.props.post)
    }

    render(){
        let { job_title, company, salary, description } = this.props.post
        // let { posts } = this.props;
        // if (!posts) return null;

        return(
            <div>
                {/* <h1>{posts.job_title}</h1>
                <h3>{posts.company}</h3>
                <h3>{posts.salary}</h3>
                <p>{posts.description}</p> */}
                <h1>{job_title}</h1>
                <h3>{company}</h3>
                <h3>{salary}</h3>
                <p>{description}</p>
                {console.log("the current user's data will go here. we will use it to append jobs to the user's list of fav jobs")}
                {/* <button onClick={() => console.log('add to your list')}>Add to Your List</button> */}
              

            </div>
        )
        
    }
}


export default PostShow;