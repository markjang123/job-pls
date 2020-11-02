import {connect} from 'react-redux';
import { searchPosting } from '../../actions/posting_actions'
import NavSearch from './nav_search';
import {withRouter} from 'react-router-dom'

const mapStateToProps = state => {
    // debugger
    return {
        searchedPostings: state.entities.SearchedPosts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchPosting: postingParams => dispatch(searchPosting(postingParams))
    }
}
 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavSearch));