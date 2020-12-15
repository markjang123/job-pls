import React from 'react'


class SearchPostingIndexItem extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        const { post } = this.props;
        if (!post) return null;

        return(
            <div className='search-result-card'>
                <div id="job-title">{post.job_title ? post.job_title : ""}</div>
                <div id="company">{post.company ? post.company : ""}</div>
                <div id="location">{post.location ? post.location : ""}</div> 
            </div>
        )
    }
}


export default SearchPostingIndexItem;