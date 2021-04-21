import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'

import { deletePosting, setCurrentPosting } from "../../actions/posting_actions";
import { savePostingToUser, updateTheCurrentUser } from "../../actions/user_actions";
import { saveReadyPost } from './create_posting';

function SearchPostingItem({currentUser, currentPosting}){
    

    const [saved, setSaved] = useState(false)
    const dispatch = useDispatch()
    const followedPostings = useSelector(state => state.session.user.followed_posting)

    useEffect(() => {
        isSaved()


    }, [followedPostings, currentPosting ])

    function isSaved(){
        if(followedPostings.length > 0){
        followedPostings.forEach(posting => {
            if((posting.posting_id === currentPosting.posting_id)){
                setSaved(true)    
            } else {
                setSaved(false)
            }})
        }
    }


    function handleClick(){
        let savingPost = saveReadyPost(currentPosting);
        if(saved){
            alert('The delete button has been disabled to prevent portfolio vandals from clearing all our demo data... again. Rest assured, this button does delete!')
            // let newUserArray = currentUser.followed_posting.filter(posting => posting._id !== currentPosting._id );
            // newUserArray = [...new Set(newUserArray)];
            // dispatch(deletePosting(currentPosting.posting_id))
            // .then(dispatch(updateTheCurrentUser(currentUser._id,{followed_posting: newUserArray})))
            // setSaved(oldState => !oldState);
        } else {
            setSaved(oldState => !oldState)
            dispatch(savePostingToUser(currentUser._id, savingPost))
        }
    }

    const {posting_url, job_title, company, salary, description, location, type} = currentPosting;
    return(
        <div className="posting-listing-container">
            this is the current posting
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
                <div className="posting-listing-description">
                    {description
                    ? `${description.slice(0,1500)}...` 
                    : ""}
                </div>
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
                <div className='posting-listing-buttons'>
                    {/* <button className="posting-listing-add-button"  */}
                    <div className="posting-listing-add-button" 
                        onClick={() => handleClick()}>
                            { saved 
                            ? "Delete job from My Jobs" 
                            : "Save job to My Jobs"}
                    </div>
                    <div className="apply-to-job">
                        {posting_url 
                        ? <a href={posting_url} target='_blank' rel='noopener'>Click here to apply</a> 
                        : "No application link available"}
                    </div>
                </div>
            </div>       
        </div>       
    )

};

export default SearchPostingItem;