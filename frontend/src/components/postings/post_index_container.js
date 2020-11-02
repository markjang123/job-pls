import { connect } from 'react-redux';
import { fetchPostings } from '../../actions/posting_actions';
import PostIndex from './post_index';
import { openModal } from '../../actions/modal_actions';
import { closeModal } from '../../actions/modal_actions';
import { session } from 'passport';
import { logout } from '../../actions/session_actions'

// need to handle modal actions, container, and modal.jsx

const mSTP = state => {
    return{
        // currentUser: state.entities.users[state.session.id],
        currentUser: state.session.user.id,
        posts: Object.values(state.entities.posts),
        modal: state.ui.modal,
        openUsers: false
    }
}

const mDTP = dispatch => {
    return{
        fetchPostings: () => dispatch(fetchPostings()),
        openModal: type => dispatch(openModal(type)),
        closeModal: () => dispatch(closeModal()),
        logout: () => dispatch(logout())
        //open modal goes here
    }
}

export default connect(mSTP,mDTP)(PostIndex)