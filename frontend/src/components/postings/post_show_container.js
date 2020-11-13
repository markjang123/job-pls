import { connect } from 'react-redux';
import PostShow from './post_show';
import { fetchPosting, fetchPostings } from '../../actions/posting_actions';
import {updateAPosting} from '../../actions/posting_actions'
// import { fetchPostings } from '../../actions/posting_actions';
import { withRouter } from 'react-router-dom';
import { updateUser } from '../../util/user_api_util';
import { closeModal } from '../../actions/modal_actions';

const mSTP = ({ entities: { posts, users }, session }) => {


    return{
        currentUser: session.user,
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
        fetchPostings: () => dispatch(fetchPostings()),
        updateAPosting: (postingId, postingData) => dispatch(updateAPosting(postingId, postingData)),
        closeModal: () => dispatch(closeModal())
        // addPost: postId => dispatch(addPost(postId)) // our list of job apps

        // need function to save job to db
    }
}

export default withRouter(connect(mSTP,mDTP)(PostShow))
