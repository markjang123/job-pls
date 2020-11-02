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
                return <UserPostsIndexContainer jobs={this.props.posts}/>
            case "followers":
                return <UserFollowIndexContainer users={this.props.user.following_users.map(userId => this.props.users[userId])} />
            case "following":
                return <UserFollowIndexContainer users={this.props.user.followed_users.map(userId => this.props.users[userId])} />
        }
    }
    render(){
        // debugger
        console.log(this.props)
        if (this.props.user === undefined) return null;
        let { username } = this.props.user

        return(

            <div className="user-show-container">
                <div id="user-show-username">
                  
                        {username}
                   
                </div>
                {/* <UsersIndex className="user-follows-index" fetchAllUsers={this.props.fetchAllUsers} users={this.props.user.following_users} /> */}
<<<<<<< HEAD
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
=======
                <div className="user-follows">
                    <ul className="user-followers-list"> 
                        <h3>Followers ({this.props.user.following_users.length})</h3>
                        {this.props.user.following_users.map(userId => {
                            // debugger   
                            return <li key={userId}>{this.props.users[userId].username}</li>})}
                    </ul>
                    <ul className="user-follow-list"> 
                        <h3>Following ({this.props.user.followed_users.length})</h3>
                        {this.props.user.followed_users.map(userId => {
                            // debugger   
                            return <li key={userId}>{this.props.users[userId].username}</li>})}
                    </ul>


>>>>>>> 72764ccc6aa4a7b4474e1c94ae43f688f7a5b7ea
                </div>
                <div className="profile-content">
                    {this.renderTab()}
                </div>
            </div>
        )
    }
}

export default UserShow