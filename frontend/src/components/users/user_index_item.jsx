import React from 'react'
import { Link } from 'react-router-dom'
import './users_index.css'
import UserShowContainer from './user_show_container';

class UsersIndexItem extends React.Component {
    constructor(props){
        super(props)
        // this.showUser = this.showUser.bind(this);
        // this.showUser = this.showUser.bind(this);
    }

    // showUser(props){
    //     return(
    //         <div>
    //             <UserShowContainer props={props}/>
    //         </div>
    //     )
    // }

    render(){

        let { _id, username } = this.props.user
        console.log(this.props.user)
        return(
        <div className="users-index-item">
            <div className="username-container">
                <p className="username" >
                    <Link to={`/users/${_id}`}>{username}</Link>
                </p>
                </div>
            <button className="follow-button">follow</button>
        </div>
        ) 
    }
}

export default UsersIndexItem