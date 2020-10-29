import React from 'react'
import './users_index.css'
import FollowButton from './follow_button'
class UsersIndexItem extends React.Component {
    constructor(props){
        super(props)
        this.forceUpdate = this.forceUpdate.bind(this)
    }

    render(){
        debugger
        return <div className="users-index-item">
            <div className="username-container">
                <p className="username">
                    {this.props.user.username}
                </p>
            </div>
            <FollowButton updateAUser={this.props.updateAUser} forceUpdate={() => this.forceUpdate()} currentUser={this.props.currentUser} user={this.props.user}/>
        </div>
        
    }
}

export default UsersIndexItem