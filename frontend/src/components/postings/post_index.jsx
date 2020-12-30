import React from 'react';
import PostIndexItem from './post_index_item';
import UserIndexContainer from '../users/users_index_container';
import PostPriorityItem from './posts_priority_item';
import NavShowContainer from '../nav/nav_container';
import './post.css'

class PostIndex extends React.Component{
    constructor(props){
        super(props);
        this.openUsersIndex = this.openUsersIndex.bind(this);
        this.state = {sorted: false}
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        if (this.props.currentUser){
            this.props.setLoading()
            this.props.fetchAllUsers()
                .then(() => this.props.fetchCurrentUserPostings(this.props.currentUser))
        }
    }

    openUsersIndex(openUsers){
        if (openUsers){
            return(
                <UserIndexContainer />
            )
        } else {
            return null;
        }
    }

    handleClick(){
        this.setState({sorted: true})
    }
    render(){
        debugger
        let { 
            posts, 
            openModal, 
            closeModal, 
            modal, 
            currentUser, 
            openUsers,
            prioritizedPosts
        } = this.props;

        if (posts === undefined) return null;
        if (this.state.sorted){
            posts = posts.sort((a,b) => b.priority - a.priority)
        } 

        if (posts.length === 0 ){
            return(
                <div className='no-results'>
                    No results to display. How about you search for something? Maybe apply? Maybe save it to your jobs? :&#41;
                </div>
            )
        } else {

            return(

                <div className='index-container'>
                    <div className='jobs-grid'>
                        {posts.map((post, idx) => (
                                <PostIndexItem 
                                    className='job'
                                    post={post}
                                    key={idx}
                                    currentUser={currentUser}
                                    modal={modal}
                                    openModal={openModal}
                                    closeModal={closeModal
                                }
                            />
                        ))}
                    </div>
                    <div className='index-users-index'>
                        {this.openUsersIndex(openUsers)}
                    </div>
                </div>
            )

        }
    }
}

export default PostIndex;
