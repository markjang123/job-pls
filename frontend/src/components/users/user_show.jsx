import React from 'react'
import {Link} from 'react-router-dom'
class UserShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        // this.props.fetchAllUsers();
        this.props.fetchUser(this.props.match.params.userId)
    }

    render(){
        debugger
        console.log(this.props)
        if (this.props.user === undefined) return null;
        let { username } = this.props.user

        return(

            <div>
                <div>
                    <h1>Show Page:{username}</h1>
                    {username}
                </div>
                <Link to="/users">users</Link>
            </div>
        )
    }
}

export default UserShow