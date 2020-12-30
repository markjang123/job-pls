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
        this.resize = this.resize.bind(this);
        this.usersMenu = this.usersMenu.bind(this);
        this.update = this.update.bind(this);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        };
    }

    renderTab() {
        switch (this.state.tab) {
            case 'users':
                return (
                    <div className='users-index-item-container'>
                        {this.props.users.map(user => {
                            if (user._id === this.props.currentUser._id) return null
                            return <UserIndexItemContainer key={user._id} user={user} />
                        })}
                    </div>
                )
            case "followers":
                return (
                    <UserFollowIndexContainer 
                        users={[...new Set(this.props.currentUser.following_users)].map( userId => 
                            this.props.user[userId])} 
                    />
                )
            case "following":
                return (
                    <UserFollowIndexContainer 
                        users={[...new Set(this.props.currentUser.followed_users)].map(userId => 
                            this.props.user[userId])
                        } 
                    />
                )
            default:
                return;
        }
    }

    selectedTab(){
        return('selected-tab')
    }

    resize() {
        this.setState({ grow: !this.state.grow });
    }

    usersMenu(){
        return(
            <div class="tabs">
                <input name="tab"
                    className='tab'
                    id="followers"
                    type="radio"
                    onClick={() => this.setState({ tab: 'followers'})}
                    />
                <label for="followers">Followers
                    ({[...new Set(this.props.currentUser.following_users)].length})</label>

                <input name="tab"
                    className='tab'
                    id="following"
                    type="radio"
                    onClick={() => this.setState({ tab: 'following' })}
                    />
                <label for="following">Following
                    ({[...new Set(this.props.currentUser.followed_users)].length})
                    </label>

                <input name="tab"
                    className='tab'
                    id="users"
                    type="radio"
                    onClick={() => this.setState({ tab: 'users' })} 
                    />
                <label for="users">All Users 
                    ({[...new Set(this.props.users)].length})
                    </label>
            </div>
        )
    }

    render() {
        if (this.props.currentUser._id === undefined) return null
        return (
            <div className='user-menu'>
                <div className='menu-header'>
                    Contacts
                </div>

                <div className='user-tabs-container'>
                    {this.usersMenu()}
                    {this.renderTab()}
                </div> 
            </div>
        )
    }
}

export default UserMenu;