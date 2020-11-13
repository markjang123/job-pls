import { connect } from 'react-redux';
import PostShow from './post_show';
import { fetchPosting, fetchPostings, updateAPosting } from '../../actions/posting_actions';
import { withRouter } from 'react-router-dom';

const mSTP = ({ entities: { posts, users }, session }) => {
    return{
        currentUser: session.user,
        posts
    }
}

const mDTP = dispatch => {
    return{
        fetchPosting: postId => dispatch(fetchPosting(postId)),
        fetchPostings: () => dispatch(fetchPostings()),
        updateAPosting: (postingId, postingData) => dispatch(updateAPosting(postingId, postingData))
    }
}

export default withRouter(connect(mSTP,mDTP)(PostShow))
