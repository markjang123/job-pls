import {connect} from 'react-redux';
import {signup} from '../../actions/session_actions'
import SessionForm from './session_form'


const mapStateToProps = state => {
    return {
        user: {
            username: "",
            email: "",
            password: "",
        },
        formType: "Sign up"
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitAction: user => dispatch(signup(user))
    }
}
const SignupFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm)
export default SignupFormContainer