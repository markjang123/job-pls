import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavButtons from './nav_buttons';
import { withRouter } from 'react-router-dom';


const mSTP = state => {
    return {
        currentUser: state.session.user,
        modal: state.ui.modal
    }
}

const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout()),
        
    }
}

export default withRouter(connect(mSTP, mDTP)(NavButtons));