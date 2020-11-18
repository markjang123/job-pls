import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import Nav from './nav';


const mSTP = state => {
    return {
        currentUser: state.session.user,
        modal: state.ui.modal
    }
}

const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default withRouter(connect(mSTP, mDTP)(Nav));