import React from 'react';
import UserPostsIndexContainer from '../postings/user_posts_index_container';
import UserFollowIndexContainer from './user_follow_index_container';
import './user_show.css';
import './users_index.css';

class UserShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {tab: "jobs"};
    }

    componentDidMount(){
        if(!this.props.hasUsers){
            this.props.fetchAllUsers()
            .then(this.props.fetchCurrentUserPostings(this.props.currentUser))
        }
        this.props.fetchUserPostings(this.props.match.params.userId);
    }

    componentDidUpdate(prevProps, prevState, snapshot){     
        if(this.props.user._id !== prevProps.user._id){
            this.props.fetchUserPostings(this.props.match.params.userId);
        }
    }
    
    renderTab(){
        switch(this.state.tab){
            case "jobs":
                return <UserPostsIndexContainer 
                    jobs={[...new Set(this.props.user.followed_posting)]}
                />;
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
                <div id="user-show-username">
                  
                        {username}
                   
                </div>
                <div className="tabs-container">
                    <div 
                        className="tab" 
                        onClick={() => this.setState({tab: "jobs"})}>
                            Jobs
                    </div>
                    <div 
                        className="tab" 
                        onClick={() => this.setState({tab: "followers"})}> 
                            Followers ({[...new Set(this.props.user.following_users)].length})    
                    </div>
                    <div 
                        className="tab"
                        onClick={() => this.setState({tab: "following"})}> 
                            Following ({[...new Set(this.props.user.followed_users)].length})
                    </div>
                </div>
                <div className="profile-content">
                    {this.renderTab()}
                </div>
            </div>
        )
    }
}

export default UserShow