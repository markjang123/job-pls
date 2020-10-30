import React from 'react'
import './users_index.css'
class UsersIndexItem extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        debugger
        return <div className="users-index-item">
            <div className="username-container">
                <p className="username">
                    {this.props.username}
                </p>
                </div>
            <button className="follow-button">follow</button>
        </div>
        
    }
}

export default UsersIndexItem