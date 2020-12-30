import React from 'react';
import UserPostsIndexContainer from '../postings/user_posts_index_container';
import UserFollowIndexContainer from './user_follow_index_container';
import './user_show.css';
import './users_index.css';

class UserShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {tab: "followers"};
    }

    componentDidMount(){
        this.props.setLoading();
        this.props.fetchAllUsers();
        this.props.fetchUser(this.props.match.params.userId)
        .then(this.props.fetchUserPostings(this.props.match.params.userId))
    }


    componentDidUpdate(prevProps, prevState, snapshot){     
        if (prevProps.user) {
            if(this.props.user._id !== prevProps.user._id){
                this.props.fetchUserPostings(this.props.match.params.userId);
            }
        }
    }
    
    renderTab(){
        switch(this.state.tab){
            case "followers":
                return <UserFollowIndexContainer 
                    users={[...new Set(this.props.user.following_users)].map(userId => 
                        this.props.users[userId]
                    )} />;
            case "following":
                return <UserFollowIndexContainer 
                    users={[...new Set(this.props.user.followed_users)].map(userId => 
                        this.props.users[userId]
                    )} />;
            default:
                return;
        };
    }
    
    render(){
        if (this.props.user === undefined) return null;

        let { username } = this.props.user;

        return(
            <div className="user-show-container">
                <div className="profile-content">
                    <div className='tabs-container'>
                        <div id="user-show-username">
                                {username}
                        </div>
                        <div className='tabs'>
                            <div
                                className="tab"
                                onClick={() => this.setState({ tab: "followers" })}>
                                Followers ({[...new Set(this.props.user.following_users)].length})
                            </div>
                            <div
                                className="tab"
                                onClick={() => this.setState({ tab: "following" })}>
                                Following ({[...new Set(this.props.user.followed_users)].length})
                            </div>
                        </div>
                    
                        <div className='tab'>
                            {this.renderTab()}
                        </div>
                    </div> 


                    <UserPostsIndexContainer
                    jobs={this.props.userPostings.filter(job => job.public)}
                    />
                </div>
            </div>
        )
    }
}

export default UserShow