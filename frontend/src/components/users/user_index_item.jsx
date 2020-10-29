import React from 'react'
import './users_index.css'
class UsersIndexItem extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return <div className="users-index-item">
            <div className="username">{this.props.username}</div>
            <button className="follow-button">follow</button>
        </div>
        
    }
}

export default UsersIndexItem