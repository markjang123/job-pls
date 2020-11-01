import React from 'react';
import SearchPostingItemContainer from './search_posting_item_container';
import SearchPostingIndexContainer from './search_posting_index_container';
import './search_tab.css'

class SearchTab extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        if(this.props.searchedPostings.length === 0){
            return <div>Theres nothing here!</div>
        }
        return(
            <div>
                <SearchPostingIndexContainer/>

                <SearchPostingItemContainer />
            </div>
        )
    }

};

export default SearchTab;