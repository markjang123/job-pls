import React from 'react';
import './user_show.css';
import './users_index.css';
import UserFollowIndexContainer from './user_follow_index_container';
import UserPostsIndexContainer from '../postings/user_posts_index_container';

class UserShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {tab: "jobs"};
    }

    componentDidMount(){
        this.props.setLoading();
        this.props.fetchAllUsers();
        // this.props.fetchPostings();
        this.props.fetchUser(this.props.match.params.userId)
        .then(this.props.fetchUserPostings(this.props.match.params.userId))
    }
    componentWillReceiveProps(){
    }
    renderTab(){
        switch(this.state.tab){
            case "jobs":
                return <UserPostsIndexContainer 
                    jobs={this.props.userPostings.filter(job => job.public)}
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
        };
    }
    render(){
        debugger
        if (this.props.user === undefined) return null;
        if(this.props.loading){
            return(
                <div 
                    className='loading-wheel-container'>
                        <div className="lds-ellipsis">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                </div>
            )
        };
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
                            Jobs ({this.props.userPostings.filter(job => job.public).length})
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