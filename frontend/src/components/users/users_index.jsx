import React from 'react'
import './users_index.css'
import UsersIndexItemContainer from './users_index_item_container'
class UsersIndex extends React.Component {
    constructor(props){
        super(props)
        this.state = {grow: false}
        this.growshrink = this.growshrink.bind(this)
        this.resize = this.resize.bind(this)
    }

    componentDidMount(){
        this.props.fetchUsersIfNeeded()
    }

    // resize(){
    //     console.log(this.state.grow)
    //     this.setState({grow: !this.state.grow});
    //     console.log(this.state.grow)
    // }

    resize() {
        console.log(this.state.grow)
        this.setState({ grow: !this.state.grow });
        console.log(this.state.grow)
    }

    growshrink(){
        // debugger
        if (this.state.grow){
            return 'users-index-item-container'
            // return '100px'
        } else {
            return 'shrink'
            // return '200px'
        }
    }


    render(){
        if (this.props.currentUser === undefined) return null
<<<<<<< HEAD
        return <ul className={this.props.className}>
            {this.props.users.map(user => {
                debugger
                if (this.props.className === "users-index" && user._id === this.props.currentUser._id) return null
                return <UsersIndexItemContainer key={user.id} user={user}/>

            })
        }
        </ul>
=======
        return(
            <div className='users-index'>
                <div className='users-label' onClick={() => this.resize()}>
                    <p id='users-index-label'>users</p>
                </div>
                <div className='spacer'/>
                <div className={this.growshrink()}>
                    {users.map(user => {
                        if (user._id === this.props.currentUser._id) return null
                        return <UsersIndexItemContainer key={user.id} user={user}/>
                    })}
                </div>
            </div>
        )
>>>>>>> 72764ccc6aa4a7b4474e1c94ae43f688f7a5b7ea
    }
}

export default UsersIndex