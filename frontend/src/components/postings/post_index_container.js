import PostIndex from './post_index';
import { connect } from 'react-redux';
import { fetchCurrentUserPostings, setLoading } from '../../actions/posting_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchAllUsers } from '../../actions/user_actions';
import { logout } from '../../actions/session_actions';


const mSTP = state => {

    let posts = state.entities.posts.user
    // console.log("post index container state:",state)
    return{
        myPosts: Object.values(state.session.user.followed_posting),
        currentUser: state.session.user._id,
        posts: state.session.user.followed_posting,
        // posts: state.entities.posts.user,
        modal: state.ui.modal,
        openUsers: false,
        hasUsers: !!Object.keys(state.entities.users).length,
    }
}

const mDTP = dispatch => {

    return{
        logout: () => dispatch(logout()),
        setLoading: () => dispatch(setLoading()),
        fetchCurrentUserPostings: userId => dispatch(fetchCurrentUserPostings(userId)),
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        openModal: type => dispatch(openModal(type)),
        closeModal: () => dispatch(closeModal()),
    }
}

export default connect(mSTP,mDTP)(PostIndex);