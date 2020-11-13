import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, login, clearSessionErrors } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom'

const mSTP = state => {
    return {
        formType: 'signup',
        switchForm: 'login',
        loginInfo: {
            email: '',
            username: '',
            password: '',
            password2: ''
        },
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
