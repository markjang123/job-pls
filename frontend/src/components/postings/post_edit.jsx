import React, {useRef, useState} from 'react'
import { closeModal } from '../../actions/modal_actions';
import { useSelector, useDispatch } from 'react-redux'
import { deletePosting, fetchCurrentUserPostings, updateAPosting } from '../../actions/posting_actions';


function PostEdit({post}){
    console.log(post)

    const editFormPublic = useRef(null)
    const dispatch = useDispatch()
    const currentUser = useSelector((state => state.session.user))

    async function handleSubmit(e){
        e.preventDefault()
        let publicData = editFormPublic.current
        let updatedPost = {
            public: publicData['public'].value,
            priority: parseInt(publicData['priority'].value),
            status: publicData['status'].value,
            notes: publicData['notes'].value,
        }

        await dispatch(updateAPosting(post._id, updatedPost))
        await dispatch(fetchCurrentUserPostings(currentUser._id))

        dispatch(closeModal())
    }

    function handleDelete(e){
        e.preventDefault()
        alert('The delete button has been disabled to prevent portfolio vandals from clearing all our demo data... again. Rest assured, this button does delete!')
    }

    function displayNotes(){
        let notes = post.notes
        return  <div>
                    <textarea name={'notes'} label={'notes'} defaultValue={notes} name={'notes'}/>
                </div>
    }
    return  <div className="newPost-edit">
                <form ref={editFormPublic} onSubmit={e => handleSubmit(e)} autoComplete="off">
                    <p id='notes'>Notes</p>
                        <div className="radio-toolbar">
                            <div className='label-header'>
                                <h1 id='job-label'>Privacy settings:</h1>
                            </div>
                            <div className='privacy'>
                                <div className='radio-container'>
                                    <input type='radio'
                                        id='public'
                                        name='public'
                                        label='public'
                                        defaultChecked={post.public}
                                        value={true}/>
                                        <label for='public'>Public</label>

                                    <input type='radio' 
                                        id='private' 
                                        name='public'
                                        label='public'
                                        defaultChecked={!post.public}
                                        value={false} 
                                        />
                                        <label for='private'>Private</label>
                                </div>
                            </div>
                        </div>


                    <div className='radio-toolbar'>
                        <div>
                            <h1 id='job-label'>Priority:</h1>
                        </div>

                        <div className="switch">
                            <input name="priority_switch" 
                                id="low_form" 
                                type="radio"
                                defaultChecked={post.priority === 1}
                                name={'priority'}
                                label={'priority'}
                                value={1} />
                                <label for="low_form">Low</label>

                            <input name="priority_switch" 
                                id="medium_form"
                                type="radio"
                                defaultChecked={post.priority === 2}
                                name={'priority'}
                                label={'priority'}
                                value={2} />
                                <label for="medium_form">Medium</label>

                            <input name="priority_switch" 
                                id="high_form" 
                                type="radio"
                                defaultChecked={post.priority === 3}
                                name={'priority'}
                                label={'priority'}
                                value={3}  />
                                <label for="high_form">High</label>
                        </div>

                    </div>
                        <div className='radio-toolbar'>
                            <div>
                                <h1 id='job-label'>Application Status:</h1>
                            </div>
                            <div className='select'>
                                    <select id='drop-down' name={'status'} 
                                    defaultValue={post.status}>
                                        <option defaultValue={post.status === "Haven't applied"} value="Haven't applied">Haven't applied</option>
                                        <option defaultValue={post.status === "Applied"} value="Applied">Applied</option>
                                        <option defaultValue={post.status === "Call Back"} value="Call Back">Call Back</option>
                                        <option defaultValue={post.status === "Phone Interview"} value="Phone Interview">Phone Interview</option>
                                        <option defaultValue={post.status === "On-site Interview"} value="On-site Interview">On-site Interview</option>
                                        <option defaultValue={post.status === "Offer Received"} value="Offer Received">Offer Received</option>
                                        <option defaultValue={post.status === "Offer Accepted"} value="Offer Accepted">Offer Accepted</option>
                                    </select>
                                    <div className="select_arrow"/>
                            </div> 
                        </div>


                        <div className='radio-toolbar'>
                            <div className='notes'>
                                <h1 id='job-label'>Updates:</h1>
                                {displayNotes()}
                            </div>
                        </div>

                    <div>
                        <button type="submit" id='save-change-button' value="Save Changes">Save Changes</button>
                        <button onClick={handleDelete} id='delete-job-button' value="Delete Job">Delete Job</button>
                    </div>
                </form>
            </div>
}

export default PostEdit