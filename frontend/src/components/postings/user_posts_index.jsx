import React from 'react'
import UserPostsIndexItem from './user_posts_index_item'
 class UserPostsIndex extends React.Component {
     render() {
         debugger
         return <ul className="user-posts-index">
             {this.props.jobs.map(job => <UserPostsIndexItem key={job} job={job}/>)}
         </ul>
     }
 }

 export default UserPostsIndex