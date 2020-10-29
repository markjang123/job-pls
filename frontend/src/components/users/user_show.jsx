import React from 'react'

class UserShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchAllUsers();
        this.props.fetchUser(this.props.match.params.userId)
    }

    render(){
        console.log(this.props)
        if (this.props.user === undefined) return null;
        let { username } = this.props.user

        return(
            <div>
                <h1>Show Page:{username}</h1>
                {username}
            </div>
        )
    }
}

export default UserShow