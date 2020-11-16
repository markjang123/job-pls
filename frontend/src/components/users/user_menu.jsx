import React from 'react';
import './user_menu.css';
import UsersIndexItemContainer from './users_index_item_container';
import UserFollowIndexContainer from './user_follow_index_container';
import UserPostsIndexContainer from '../postings/user_posts_index_container';

class UserMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            grow: true,
            tab: 'users' };
        this.growshrink = this.growshrink.bind(this);
        this.resize = this.resize.bind(this);
        this.renderUserIndex = this.renderUserIndex.bind(this);
    }

    componentDidMount() {
        this.props.fetchUsersIfNeeded()
    }

    renderTab() {
        switch (this.state.tab) {
            case 'users':
                return this.renderUserIndex() ;
            case "jobs":
                return (
                    <UserPostsIndexContainer 
                        jobs={this.props.user.followed_posting.map(postId => 
                            this.props.posts.find(post => 
                                post._id === postId)
                            )
                        } 
                    />
                )
            case "followers":
                return (
                    <UserFollowIndexContainer 
                        users={this.props.user.following_users.map(userId => 
                            this.props.users[userId])} 
                    />
                )
            case "following":
                return (
                    <UserFollowIndexContainer 
                        users={this.props.user.followed_users.map(userId => 
                            this.props.users[userId])
                        } 
                    />
                )
            default:
                return;
        }
    }


    renderUserIndex(){
        return(
            <div className='users-index'>
                    <div className={this.growshrink()}>
                        {this.props.users.map(user => {
                            if (user._id === this.props.currentUser._id) return null
                            return <UsersIndexItemContainer key={user._id} user={user} />
                        })}
                    </div>
            </div> 
        )
    }

    resize() {
        this.setState({ grow: !this.state.grow });
    }

    growshrink() {
        if (this.state.grow) {
            return 'users-index-item-container'
        } else {
            return 'shrink'
        }
    }

    render() {
        if (this.props.currentUser._id === undefined) return null
        return (
            <div className='user-menu'>
                <div className='user-header'>
                    <p className="user-greeting">
                        Hello, {this.props.currentUser.username}
                    </p>
                </div>
                <div className="profile-content">
                    {this.renderTab()}
                </div>
            </div>
        )
    }
}

export default UserMenu;