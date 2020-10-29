import React from 'react'
import './users_index.css'
import UsersIndexItem from './user_index_item'
class UsersIndex extends React.Component {
    constructor(props){
        super(props)
    }
    componentWillMount(){
        this.props.fetchAllUsers()
    }
    render(){
        debugger
        return <ul className="users-index">
            {this.props.users.map(user => {
                return <UsersIndexItem key={user.id} updateAUser={this.props.updateAUser} currentUser={this.props.currentUser} user={user}/>
            })
        }
        </ul>
        
    }
}

export default UsersIndex