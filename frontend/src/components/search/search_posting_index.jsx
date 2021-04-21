import React, { useEffect, useState } from "react";

import SearchPostingItem from './search_posting_item';
import Logo from '../nav/logo192.png';


function SearchPostingIndex({searchedPostings, currentUser}){
    const [currentPosting, setCurrentPosting] = useState(searchedPostings[0])

    useEffect(() => {
        setCurrentPosting(searchedPostings[0])
    }, [])


    function createCurrentPosting(posting){
        setCurrentPosting(posting)
    }

    function isCurrentPosting(posting, currentPosting){
        return JSON.stringify(posting) === JSON.stringify(currentPosting)
    }


    if(searchedPostings.length === 0) return null;        
    if(!!currentUser ){
    return(
        <div className="search-result-container">
            <div className="search-result-list">
                {searchedPostings.map((posting, idx) => {
                    return(
                        <div className='search-result-card'
                            onClick={() => createCurrentPosting(posting)}

                            id={isCurrentPosting(posting, currentPosting)
                            ? "selected-posting" 
                            : null}
                            >
                            <div className='logo-div'>
                                {
                                posting.company_logo 
                                ?<img className='search-card-company-logo' src={posting.company_logo}/>
                                :<img className='search-card-company-logo' src={Logo}/>
                                }
                            </div>

                            <div className='card-info-container'>
                                <p className="job-title">{posting.job_title ? posting.job_title : ""}</p>
                                <p className="company">{posting.company ? posting.company : ""}</p>
                                <p className="location">{posting.location ? posting.location : ""}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <SearchPostingItem currentUser={currentUser} currentPosting={currentPosting} />
        </div>
    )}
    return null;
}

export default SearchPostingIndex;