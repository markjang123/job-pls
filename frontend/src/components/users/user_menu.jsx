import React from 'react';
import './user_menu.css';
import UserIndexItemContainer from './user_index_item_container';
import UserFollowIndexContainer from './user_follow_index_container';
import UserPostsIndexContainer from '../postings/user_posts_index_container';
import NavButtonsContainer from '../nav/nav_buttons_container'

class UserMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            grow: true,
            tab: 'users'};
            // tab: "followers"};
        // this.growshrink = this.growshrink.bind(this);
        this.resize = this.resize.bind(this);
        this.renderUserIndex = this.renderUserIndex.bind(this);
    }

    renderTab() {
        switch (this.state.tab) {
            case 'users':
                return this.renderUserIndex();
            case "followers":
                return (
                    <UserFollowIndexContainer 
                        users={this.props.currentUser.following_users.map( userId => 
                            this.props.user[userId])} 
                    />
                )
            case "following":
                return (
                    <UserFollowIndexContainer 
                        users={this.props.currentUser.followed_users.map(userId => 
                            this.props.user[userId])
                        } 
                    />
                )
            default:
                return;
        }
    }


    renderUserIndex(){
        return(
            <div className='users-index-item-container'>
                {this.props.users.map(user => {
                    if (user._id === this.props.currentUser._id) return null
                    return <UserIndexItemContainer key={user._id} user={user} />
                })}
            </div> 
        )
    }

    resize() {
        this.setState({ grow: !this.state.grow });
    }

    render() {
        if (this.props.currentUser._id === undefined) return null
        return (
            <div className='user-menu'>
                <div className='menu-header'>
                    Contacts
                </div>

                <div className='user-tabs-container'>
                    <div className='tabs'>
                        <div
                            className="tab"
                            onClick={() => this.setState({ tab: "followers" })}>
                            Followers 
                            ({[...new Set(this.props.currentUser.following_users)].length})
                            </div>
                        <div
                            className="tab"
                            onClick={() => this.setState({ tab: "following" })}>
                            Following 
                            ({[...new Set(this.props.currentUser.followed_users)].length})
                            </div>
                        <div
                            className="tab"
                            onClick={() => this.setState({ tab: "users" })}>
                            All Users
                            ({[...new Set(this.props.users)].length})
                            </div>
                    </div>

                    {/* <div className='users-index-item-container'> */}
                        {this.renderTab()}
                    {/* </div> */}
                </div> 

                {/* <div className="profile-content">
                    {this.renderTab()}
                </div> */}
            </div>
        )
    }
}

export default UserMenu;