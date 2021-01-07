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
        this.setTab = this.setTab.bind(this);
        this.selectedTab = this.selectedTab.bind(this)
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        };
    }

    selectedTab(){
        return('selected-tab')
    }

    renderTab() {
        switch (this.state.tab) {
            case 'users':
                return (
                    <div className='users-index-item-container' id={this.selectedTab()}>
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

    

    resize() {
        this.setState({ grow: !this.state.grow });
    }

    setTab(e, tabName) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({tab: tabName});
    }

    usersMenu(){
        return(
            <div className="tabs">
                <input name="ftab"
                    className='tab'
                    id="followersTab"
                    type="radio"
                    onClick={(e) => this.setTab( e, 'followers')}
                    />
                <label htmlFor="followersTab">Followers
                    ({[...new Set(this.props.currentUser.following_users)].length})</label>

                <input name="ftab"
                    className='tab'
                    id="followingTab"
                    type="radio"
                    onClick={(e) => this.setTab( e, 'following')}
                    />
                <label htmlFor="followingTab">Following
                    ({[...new Set(this.props.currentUser.followed_users)].length})
                    </label>

                <input name="ftab"
                    className='tab'
                    id="usersTab"
                    type="radio"
                    onClick={(e) => this.setTab( e, 'users')}
                    />
                <label htmlFor="usersTab">All Users 
                    ({[...new Set(this.props.users)].length})
                    </label>
            </div>
        )
    }

    render() {
        if (this.props.currentUser._id === undefined) return null
        return (
            <div className='user-menu' onClick={e => e.stopPropagation()}>
                <div className='menu-header' onClick={e => e.stopPropagation()}>
                    Contacts
                </div>

                <div className='user-tabs-container' onClick={e => e.stopPropagation()}>
                    {this.usersMenu()}
                    {this.renderTab()}
                </div> 
            </div>
        )
    }
}

export default UserMenu;