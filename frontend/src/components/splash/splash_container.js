import { connect } from 'react-redux'
import Splash from './splash'
import {openModal, closeModal} from '../../actions/modal_actions';


const mSTP = state => {
    return {
        currentUser: state.session.user.id,
        modal: state.ui.modal
    }
};

const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        openModal: modal => dispatch(openModal())
    };
};

export default connect(mSTP, mDTP)(Splash)