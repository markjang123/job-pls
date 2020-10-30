import { connect } from 'react-redux';
import { fetchPostings } from '../../actions/posting_actions';
import PostIndex from './post_index';
import { openModal } from '../../actions/modal_actions';
import { closeModal } from '../../actions/modal_actions';
import { session } from 'passport';

// need to handle modal actions, container, and modal.jsx

const mSTP = state => {
    return{
        // currentUser: state.entities.users[state.session.id],
        currentUser: state.session.user.id,
        posts: Object.values(state.entities.posts),
        modal: state.ui.modal
    }
}

const mDTP = dispatch => {
    return{
        fetchPostings: () => dispatch(fetchPostings()),
        openModal: type => dispatch(openModal(type)),
        closeModal: () => dispatch(closeModal())
        //open modal goes here
    }
}

export default connect(mSTP,mDTP)(PostIndex)