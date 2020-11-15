import { connect } from 'react-redux';
import { fetchPostings, fetchPosting, fetchUserPostings } from '../../actions/posting_actions';
import PostIndex from './post_index';
import { openModal, closeModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions'


const mSTP = state => {
    debugger
    return{
        myPosts: Object.values(state.session.user.followed_posting),
        currentUser: state.session.user._id,
        posts: state.entities.posts.user,
        modal: state.ui.modal,
        openUsers: false
    }
}

const mDTP = dispatch => {
    return{
        fetchPostings: () => dispatch(fetchPostings()),
        fetchPosting: jobId => dispatch(fetchPosting(jobId)),
        openModal: type => dispatch(openModal(type)),
        closeModal: () => dispatch(closeModal()),
        logout: () => dispatch(logout()),
        fetchUserPostings: userId => dispatch(fetchUserPostings(userId))
    }
}

export default connect(mSTP,mDTP)(PostIndex);