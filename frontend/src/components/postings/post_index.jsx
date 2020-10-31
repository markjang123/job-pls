import React from 'react';
import PostIndexItem from './post_index_item';
import { Link } from 'react-router-dom'
import './post.css'

class PostIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchPostings()
    }

    render(){
        const { posts, openModal, closeModal, modal, currentUser } = this.props;
        if (posts === undefined) return null;
        debugger
        return(
            <div className='index-container'>
                <div className='jobs-grid'>
                    {posts.map(post => (
                            <PostIndexItem className='job'
                            post={post}
                            key={post._id}
                            currentUser={currentUser}
                            modal={modal}
                            openModal={openModal}
                            closeModal={closeModal}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default PostIndex;
