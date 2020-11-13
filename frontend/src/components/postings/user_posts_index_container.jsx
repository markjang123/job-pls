import {connect} from 'react-redux'
import UserPostsIndex from './user_posts_index'

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

export default  connect(mapStateToProps, mapDispatchToProps)(UserPostsIndex);