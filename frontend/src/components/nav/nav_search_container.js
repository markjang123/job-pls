import {connect} from 'react-redux';
import { searchPosting, setLoading } from '../../actions/posting_actions'
import NavSearch from './nav_search';
import {withRouter} from 'react-router-dom'

const mapStateToProps = state => {
    return {
        searchedPostings: state.entities.SearchedPosts,
        loading: state.ui.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchPosting: postingParams => dispatch(searchPosting(postingParams)),
        setLoading: () => dispatch(setLoading())
    }
}
 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavSearch));