import {connect} from 'react-redux'
import UserPostsIndex from './user_posts_index'
const mapStateToProps = state => {
    // debugger
    return {
        currentUser: state.session.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}

const UserPostsIndexContainer = connect(mapStateToProps, mapDispatchToProps)(UserPostsIndex)
export default UserPostsIndexContainer