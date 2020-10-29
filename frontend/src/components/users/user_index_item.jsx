import React from 'react'
import './users_index.css'
class UsersIndexItem extends React.Component {
    render(){
        return <div className="users-index-item">
            <div className="username">Elon Musk</div>
            <button className="follow-button">follow</button>
        </div>
        
    }
}

export default UsersIndexItem