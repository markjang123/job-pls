import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchCurrentUserPostings, setLoading } from '../../actions/posting_actions';
import { fetchAllUsers } from '../../actions/user_actions';
import SearchPostingIndex from './search_posting_index';
import './search_tab.css';

function SearchTab(){


    const isCurrentUser = useSelector((state => state.session.user))
    const currentUser = Object.values(isCurrentUser).length === 0 ? false : isCurrentUser
    const loading = useSelector((state => state.ui.loading))
    const searchedPostings = useSelector((state => state.entities.searchedPosts))

    const dispatch = useDispatch()

    useEffect(() => {
        if(currentUser){
        dispatch(setLoading())
        dispatch(fetchAllUsers())
            .then(() => fetchCurrentUserPostings(currentUser))
        }
    },[])

    if(loading){
        return(
            <div className='loading-wheel-container'>
                    <div className="lds-ellipsis">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
            </div>
        )
    };

    if(searchedPostings.length === 0){
        return (
            <div className='no-results'>
                No results to display. How about you search for something? Maybe apply? Maybe save it to your jobs? :&#41;
            </div>
        )
    };
    return(
        <div>
            <SearchPostingIndex searchedPostings={searchedPostings} currentUser={currentUser}/>
        </div>
    );
};

export default SearchTab;