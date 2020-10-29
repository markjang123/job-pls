import { connect } from 'react-redux';
import PostShow from './post_show';
import { fetchPosting, fetchPostings } from '../../actions/posting_actions';
// import { fetchPostings } from '../../actions/posting_actions';
import { withRouter } from 'react-router-dom';

const mSTP = ({ entities: { posts, users }, session }) => {


    return{
        currentUser: users[session.id],
        posts
    }
}

// const mSTP = (proc) => {


//     return {
//         proc
//     }
// }

const mDTP = dispatch => {
    return{

        fetchPosting: postId => dispatch(fetchPosting(postId)),
        fetchPostings: () => dispatch(fetchPostings())
        // addPost: postId => dispatch(addPost(postId)) // our list of job apps

        // need function to save job to db
    }
}

export default withRouter(connect(mSTP,mDTP)(PostShow))
