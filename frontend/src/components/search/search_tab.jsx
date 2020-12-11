import React from 'react';
import SearchPostingItemContainer from './search_posting_item_container';
import SearchPostingIndexContainer from './search_posting_index_container';
import './search_tab.css';

class SearchTab extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        if(this.props.loading){
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

        if(this.props.searchedPostings.length === 0){
            return (
                <div className='no-results'>
                    No results to display. How about you search for something? Maybe apply? Maybe save it to your jobs? :&#41;
                </div>
            )
        };
        return(
            <div>
                <SearchPostingIndexContainer/>
            </div>
        );
    }

};

export default SearchTab;