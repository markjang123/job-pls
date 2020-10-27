import {connect} from 'react-redux';
// import {signup} from '../../actions/session_actions'
import SessionForm from './session_form'
// import {requestUser} from '../../actions/user_actions'


const mapStateToProps = state => {
    return {
        user: {
            username: "",
            email: "",
            password: "",
        },
        currentUserId: state.session.currentUserId,
        formType: "Sign up"
    }
}

const mapDispatchToProps = dispatch => {
    return {
        null: "null"
    }
}
const SignupFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm)
export default SignupFormContainer