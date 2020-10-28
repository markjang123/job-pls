import {connect} from 'react-redux';
import {signup} from '../../actions/session_actions'
import SessionForm from './session_form'
import {clearSessionErrors} from '../../actions/session_actions'

const mapStateToProps = state => {
    return {
        user: {
            username: "",
            email: "",
            password: "",
            password2: ""
        },
        formType: "Sign up",
        errors: state.errors.session
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitAction: user => dispatch(signup(user)),
        clearSessionErrors: () => dispatch(clearSessionErrors())
    }
}
const SignupFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm)
export default SignupFormContainer