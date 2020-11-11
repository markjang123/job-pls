import { connect } from 'react-redux';

import { fetchAllUsers } from '../../actions/user_actions'

import Users from './users.jsx';
import { openModal } from '../../actions/modal_actions';
import { closeModal } from '../../actions/modal_actions';

// need to handle modal actions, container, and modal.jsx

const mSTP = state => {
    return {
        currentUser: state.session.user,
        users: Object.values(state.entities.users),
        modal: state.ui.modal
    }
}

const mDTP = dispatch => {
    return {
        fetchAllUsers: () => dispatch(fetchAllUsers()),

        openModal: type => dispatch(openModal(type)),
        closeModal: () => dispatch(closeModal())
        //open modal goes here
    }
}

export default connect(mSTP, mDTP)(Users)