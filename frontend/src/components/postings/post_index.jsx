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
        // if (pin === undefined) return null;
        if (posts === undefined) return null;
        // debugger
        
        return(
            <div className='index-container'>
                <div>
                    <h1>HELLO</h1>
                </div>

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
