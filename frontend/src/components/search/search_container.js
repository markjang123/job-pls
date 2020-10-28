import {connect} from 'react-redux';
import {searchPosting} from '../../actions/posting_actions'
import Search from './search'
import {clearSessionErrors} from '../../actions/session_actions'

const mapStateToProps = state => {
    return {
        searchedPostings: state.entities.searchedPosts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchPosting: postingParams => dispatch(searchPosting(postingParams)),
        // clearSessionErrors: () => dispatch(clearSessionErrors())
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Search);