import {connect} from 'react-redux';
// import {login} from '../../actions/session_actions'
import SessionForm from './session_form'
// import {requestUser} from '../../actions/user_actions'

const mapStateToProps = state => {
    return {
        user: {
            username_or_email: "",
            password: ""
        },
        currentUserId: state.session.currentUserId,
        formType: "Log in"
    }
}

const mapDispatchToProps = dispatch => {
    return {
        null: "null"
    }
}
const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm)
export default LoginFormContainer