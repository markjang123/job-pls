import React from 'react';
import SessionForm from './session_form';
import { connect } from 'react-redux';
import { login, signup, clearSessionErrors } from '../../actions/session_actions';
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
