import React from "react";
import { saveReadyPost } from './create_posting';

class SearchPostingItem extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            saved: this.props.currentUser.followed_posting.includes(this.props.currentPosting._id)
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        let savingPost = saveReadyPost(this.props.currentPosting);
        if(this.state.saved){
            let newUserArray = this.props.currentUser.followed_posting.filter(postIDX => postIDX !== this.props.currentPosting._id );
            
            newUserArray = [...new Set(newUserArray)];
            this.props.deletePosting(this.props.currentPosting._id)
            .then(this.props.setCurrentPosting(savingPost))
            .then(this.props.updateTheCurrentUser(this.props.currentUser._id,{followed_posting: newUserArray}))
            .then(this.forceUpdate());
            this.setState({saved: false});
        } else {
            this.setState({saved: true});
            this.props.savePostingToUser(this.props.currentUser._id, savingPost)
            .then(this.forceUpdate());
        }
    }

    render(){
        if(
            this.props.currentPosting._id === undefined
            && this.props.currentPosting.posting_id === undefined
        ) return null;
        const {posting_url, job_title, status, priority, company, salary, description, location, source, type, created_at, date} = this.props.currentPosting
        return(
            <div className="posting-listing-container">
                <div className="posting-listing">
                    <div className='posting-listing-header'>
                        <div className="posting-listing-title">
                            {job_title ? job_title : ""}
                        </div>
                        <div className="posting-listing-company">
                            {company ? company : ""}
                        </div>
                        <div className="posting-listing-location">
                            {location ? location : ""}
                        </div>
                    </div>

                    <div className='posting-listing-body'>
                        <div className="posting-listing-description">
                            {description
                            ? `${description.slice(0,1500)}...` 
                            : ""}
                        </div>
                        <br/>
                        <br/>
                        <div className="posting-listing-type">
                            {type 
                            ? `Schedule: ${type}` 
                            : ""}
                        </div>
                        <div className="posting-listing-salary">
                            {salary 
                            ? `Salary: ${salary}`
                            : ""}
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                        <button className="posting-listing-add-button" 
                            onClick={this.handleClick}>
                                { this.props.currentUser.followed_posting.includes(this.props.currentPosting._id) 
                                ? "Delete Job Posting from Collection" 
                                : "Save Job Posting for Collection"}
                        </button>
                        <br />
                        <div className="apply-to-job">
                            {posting_url 
                            ? <a href={posting_url} target='_blank'>Click here to apply.</a> 
                            : "No application link available."}
                        </div>
                        <br />
                        <br />
                        <div className="posting-listing-created_at">
                            {created_at 
                            ? created_at 
                            : ""}
                        </div>
                </div>       
            </div>       
        ) 
    }

};

export default SearchPostingItem;