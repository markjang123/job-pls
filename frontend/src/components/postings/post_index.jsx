import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchPostings()
    }

    render(){
        const { posts } = this.props;
        
        return(
            <div clasName='index-container'>
                {posts.map(post => (
                    <PostIndexItem
                        post={post}
                        key={post.id}
                    />
                ))}
            </div>
        )
    }
}

export default PostIndex;
