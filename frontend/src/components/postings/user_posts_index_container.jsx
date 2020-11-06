import {connect} from 'react-redux'
import UserPostsIndex from './user_posts_index'
const mapStateToProps = state => {
    // debugger
    return {
        currentUser: state.entities.users[state.session.user.id]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}

const UserPostsIndexContainer = connect(mapStateToProps, mapDispatchToProps)(UserPostsIndex)
export default UserPostsIndexContainer