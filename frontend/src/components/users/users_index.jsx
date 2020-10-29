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
        console.log('printing props of user index')
        console.log(this.props)
        return(
            <ul className="users-index">
                {this.props.users.map(user => (
                    <UsersIndexItem 
                    user={user}
                    key={user.id} 
                    />
                ))}
            </ul>   
        )
    }
}

export default UsersIndex