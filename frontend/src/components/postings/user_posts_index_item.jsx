import React from 'react'
 class UserPostsIndexItem extends React.Component {
     render() {
         return <div className="user-posts-index-item">
            <a id="job-title" href={this.props.job.posting_url} target="blank">{this.props.job.job_title}</a>
            <h3 id="job-company">{this.props.job.company}</h3>
            <h3 id="job-salary">{this.props.job.salary}</h3>
            <h3 id="job-status">{this.props.job.status}</h3>
         </div>
     }
 }

 export default UserPostsIndexItem