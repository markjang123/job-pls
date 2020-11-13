import { connect } from 'react-redux';
import { fetchAllUsers } from '../../actions/user_actions';
import Users from './users.jsx';
import { openModal, closeModal } from '../../actions/modal_actions';

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
    }
}

export default connect(mSTP, mDTP)(Users)