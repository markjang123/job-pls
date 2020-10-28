import {connect} from 'react-redux';
import {login} from '../../actions/session_actions'
import SessionForm from './session_form'
import {clearSessionErrors} from '../../actions/session_actions'
const mapStateToProps = state => {
    return {
        user: {
            email: "",
            password: ""
        },
        formType: "Log in",
        errors: state.errors.session
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitAction: user => dispatch(login(user)),
        clearSessionErrors: () => dispatch(clearSessionErrors())
    }
}
const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm)
export default LoginFormContainer