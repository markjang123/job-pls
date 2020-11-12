// import {connect} from 'react-redux';
// import {login} from '../../actions/session_actions'
// import {signup} from '../../actions/session_actions'
// import SessionForm from './session_form'
// import {clearSessionErrors} from '../../actions/session_actions'

// const mapStateToProps = state => {
//     return {
//         user: {
//             email: "",
//             password: ""
//         },
//         formType: "Log in",
//         switchType: 'Sign up',
//         errors: state.errors.session,
//         isAuthenticated: state.session.isAuthenticated
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         submitAction: user => dispatch(login(user)),
//         clearSessionErrors: () => dispatch(clearSessionErrors()),
//     }
// }
// const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm)
// export default LoginFormContainer

import React from 'react';
import SessionForm from './session_form';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { signup } from '../../actions/session_actions';
import { clearSessionErrors } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';


const mSTP = state => {
    return {
        sessionType: 'Login',
        sessionInfo: {
            username: '',
            password: ''
        },
        other: 'Sign Up',
        errors: state.errors.session
    };
};


const mDTP = dispatch => {
    return {
        loginUser: (user) => dispatch(login(user)),
        signupUser: (user) => dispatch(signup(user)),
        clearSessionErrors: () => dispatch(clearSessionErrors()),
    };
};

export default withRouter(connect(mSTP, mDTP)(SessionForm));
