// import {connect} from 'react-redux';
// import {signup} from '../../actions/session_actions'
// import {login} from '../../actions/session_actions'
// import SessionForm from './session_form'
// import {clearSessionErrors} from '../../actions/session_actions'

// const mapStateToProps = state => {
//     return {
//         user: {
//             username: "",
//             email: "",
//             password: "",
//             password2: ""
//         },
//         formType: "Sign up",
//         switchType: 'Log in',
//         errors: state.errors.session, 
//         isAuthenticated: state.session.isAuthenticated
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         submitAction: user => dispatch(signup(user)),
//         clearSessionErrors: () => dispatch(clearSessionErrors()),
//     }
// }
// const SignupFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm)
// export default SignupFormContainer

import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';
import { login } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import { clearSessionErrors } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom'

const mSTP = state => {
    return {
        sessionType: 'Sign Up',
        sessionInfo: {
            email: '',
            username: '',
            password: '',
            password2: ''
        },
        other: 'Login',
        errors: state.errors.session
    };
};

const mDTP = dispatch => {
    return {
        signupUser: (user) => dispatch(signup(user)),
        loginUser: (user) => dispatch(login(user)),
        clearSessionErrors: () => dispatch(clearSessionErrors()),
        closeModal: () => dispatch(closeModal())
    };
};

export default withRouter(connect(mSTP, mDTP)(SessionForm));
