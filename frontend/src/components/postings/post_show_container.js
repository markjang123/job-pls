import PostShow from './post_show';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateAPosting, deletePosting, fetchCurrentUserPostings } from '../../actions/posting_actions';
import { closeModal } from '../../actions/modal_actions';


const mSTP = ({ entities: { posts, users }, session }) => {
    return{
        currentUser: session.user,
        posts
    }
}

const mDTP = dispatch => {
    return{
        updateAPosting: (postingId, postingData) => dispatch(updateAPosting(postingId, postingData)),
        deletePosting: postingId => dispatch(deletePosting(postingId)),
        fetchCurrentUserPostings: userId => dispatch(fetchCurrentUserPostings(userId)),
        closeModal: () => dispatch(closeModal())
    }
}

export default withRouter(connect(mSTP,mDTP)(PostShow))
