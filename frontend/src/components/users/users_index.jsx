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
        debugger
        if (this.props.currentUser === undefined) return null
        return(
            <div className='users-index'>
                <div className='users-label' onClick={() => this.resize()}>
                    <p id='users-index-label'>users</p>
                </div>
                <div className='spacer'/>
                <div className={this.growshrink()}>
                    {this.props.users.map(user => {
                        if (user._id === this.props.currentUser._id) return null
                        return <UsersIndexItemContainer key={user.id} user={user}/>
                    })}
                </div>
            </div>
        )
    }
}

export default UsersIndex