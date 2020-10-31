import React from 'react'
import {Link} from 'react-router-dom'
import './user_show.css'
import './users_index.css'
import UsersIndex from './users_index'

class UserShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchAllUsers();
        this.props.fetchUser(this.props.match.params.userId)
    }

    render(){
        debugger
        console.log(this.props)
        if (this.props.user === undefined) return null;
        let { username } = this.props.user

        return(

            <div className="user-show-container">
                <div id="user-show-username">
                  
                        {username}
                   
                </div>
                {/* <UsersIndex className="user-follows-index" fetchAllUsers={this.props.fetchAllUsers} users={this.props.user.following_users} /> */}
                <div className="user-follows">
                    <ul className="user-followers-list"> 
                        <h3>Followers ({this.props.user.following_users.length})</h3>
                        {this.props.user.following_users.map(userId => {
                            debugger   
                            return <li key={userId}>{this.props.users[userId].username}</li>})}
                    </ul>
                    <ul className="user-follow-list"> 
                        <h3>Following ({this.props.user.followed_users.length})</h3>
                        {this.props.user.followed_users.map(userId => {
                            debugger   
                            return <li key={userId}>{this.props.users[userId].username}</li>})}
                    </ul>


                </div>
                <div className="user-jobs-index">
                        JOBS
                </div>
            </div>
        )
    }
}

export default UserShow