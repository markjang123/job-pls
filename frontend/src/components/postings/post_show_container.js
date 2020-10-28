import { connect } from 'react-redux';
import PostShow from './post_show';

const mSTP = ({ entities: { posts, users }, session }, ownProps) => {

    let post = posts[ownProps.match.params.postId];

    return{
        currentUser: users[session.id],
        post
    }

}

const mDTP = dispatch => {
    return{
        addPost: () => console.log('') // our list of job apps
        // addPost: postId => dispatch(addPost(postId)) // our list of job apps
        // need function to save job to db
    }
}

export default connect(mSTP,mDTP)(PostShow)

