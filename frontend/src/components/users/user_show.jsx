import React from 'react'
import {Link} from 'react-router-dom'
import './user_show.css'
import './users_index.css'
import UserFollowIndexContainer from './user_follow_index_container'
import UserPostsIndexContainer from '../postings/user_posts_index_container'

class UserShow extends React.Component{
    constructor(props){
        super(props)
        this.state = {tab: "jobs"}
    }

    componentDidMount(){
        this.props.fetchAllUsers();
        this.props.fetchUser(this.props.match.params.userId)
    }
    renderTab(){
        switch(this.state.tab){
            case "jobs":
                return <UserPostsIndexContainer jobs={this.props.user.followed_posting.map(postId => this.props.posts.find(post => post._id === postId))}/> //MAP JOB IDS TO JOBS
            case "followers":
                return <UserFollowIndexContainer users={this.props.user.following_users.map(userId => this.props.users[userId])} />
            case "following":
                return <UserFollowIndexContainer users={this.props.user.followed_users.map(userId => this.props.users[userId])} />
        }
    }
    render(){
        console.log(this.props)
        if (this.props.user === undefined) return null;
        let { username } = this.props.user

        return(

            <div className="user-show-container">
                <div id="user-show-username">
                  
                        {username}
                   
                </div>
                <div className="tabs-container">
                    <div className="tab" onClick={() => this.setState({tab: "jobs"})}>
                            Jobs
                    </div>
                    <div className="tab" onClick={() => this.setState({tab: "followers"})}> 
                        Followers ({this.props.user.following_users.length})    
                    </div>
                    <div className="tab"onClick={() => this.setState({tab: "following"})}> 
                        Following ({this.props.user.followed_users.length})
                    </div>
                </div>
                <div className="profile-content">
                    {this.renderTab()}
                </div>
            </div>
        )
    }
}

export default UserShow