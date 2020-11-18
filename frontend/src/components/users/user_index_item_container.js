import { connect } from 'react-redux';
import UserIndexItem from './user_index_item';

const mapStateToProps = state => {
    return {
        currentUser: state.session.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserIndexItem);
