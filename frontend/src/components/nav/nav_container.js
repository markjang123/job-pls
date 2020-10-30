import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { closeModal } from '../../actions/modal_actions';
import { session } from 'passport';
import { logout } from '../../actions/session_actions'
import Nav from './nav';

// need to handle modal actions, container, and modal.jsx

const mSTP = state => {
    return {
        currentUser: state.session.user.id,
        modal: state.ui.modal
    }
}

const mDTP = dispatch => {
    return {
        openModal: type => dispatch(openModal(type)),
        closeModal: () => dispatch(closeModal()),
        logout: () => dispatch(logout())
        //open modal goes here
    }
}

export default connect(mSTP, mDTP)(Nav)