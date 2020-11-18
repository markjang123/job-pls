import UsersIndex from './users_index';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        users: Object.values(state.entities.users),
        currentUser: state.session.user,
        className: "users-index"
    }
} 

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersIndex);
