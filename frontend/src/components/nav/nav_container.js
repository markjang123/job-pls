import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';
import { searchPosting } from '../../actions/posting_actions'
import Nav from './nav';
import { withRouter } from 'react-router-dom';


const mSTP = state => {
    return {
        currentUser: state.session.user,
        modal: state.ui.modal
    }
}

const mDTP = dispatch => {
    return {
        openModal: type => dispatch(openModal(type)),
        closeModal: () => dispatch(closeModal()),
        logout: () => dispatch(logout()),
        searchPosting: postingParams => dispatch(searchPosting(postingParams))
    }
}

export default withRouter(connect(mSTP, mDTP)(Nav));