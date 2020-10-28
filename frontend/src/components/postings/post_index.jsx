import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchPostings()
    }

    // check(){
    //     if (this.props === null){
    //         return(
    //             <div>There are no posts available</div>
    //         )
    //     }
    // }

    render(){
        // {check}
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
