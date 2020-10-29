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
        const { posts, openModal, closeModal, modal, currentUser } = this.props;
        // if (pin === undefined) return null;
        if (posts === undefined) return null;
        console.log('currentUser is')
        console.log(this.props.currentUser)
        
        return(
            <div className='index-container'>
                <div>
                    <h1 onClick={() => console.log('click')} >HELLO</h1>
                </div>
                {posts.map(post => (
                    <PostIndexItem
                        post={post}
                        key={post._id}
                        currentUser={currentUser}
                        modal={modal}
                        openModal={openModal}
                        closeModal={closeModal}
                    />
                ))}
            </div>
        )
    }
}

export default PostIndex;
