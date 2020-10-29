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
                return <UsersIndexItem username={user.username}/>
            })
        }
        </ul>
        
    }
}

export default UsersIndex