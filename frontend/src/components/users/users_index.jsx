import React from 'react';
import './users_index.css';
import UsersIndexItemContainer from './users_index_item_container';

class UsersIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {grow: true};
        this.growshrink = this.growshrink.bind(this);
        this.resize = this.resize.bind(this);
    }

    componentDidMount(){
        this.props.fetchUsersIfNeeded();
    }

    resize() {
        this.setState({ grow: !this.state.grow });
    }

    growshrink(){
        if (this.state.grow){
            return(
                'users-index-item-container'
            )
        } else {
            return(
                'shrink'
            )
        }
    }

    render(){
        if (this.props.currentUser === undefined) return null
        return(
            <div className='users-index'>
                    <div className={this.growshrink()}>
                        {this.props.users.map(user => {
                            if (user._id === this.props.currentUser._id) return null
                            return <UsersIndexItemContainer key={user._id} user={user}/>
                        })}
                    </div>
            </div>
        )
    }
}

export default UsersIndex