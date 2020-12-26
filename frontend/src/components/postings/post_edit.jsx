import React from 'react'

class PostEdit extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            public: this.props.post.public,
            priority: this.props.post.priority || null,
            status: this.props.post.status,
            notes: this.props.post.notes || 'Updates go here',
        };
        this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler(e){
        e.preventDefault();
        this.props.updateAPosting(this.props.post._id, this.state);
        this.props.closeEdit();
        this.props.closeModal();
    }

    update(field){
        return e => {
            this.setState({[field]: e.target.value})
        };
    }

    displayNotes(){
        return(
            <div>
                <textarea defaultValue={this.state.notes} onChange={this.update("notes")}/>
            </div>
        )
    }

    render() {
        return(

        <div className="post-edit">
            <form onSubmit={this.submitHandler}>
                <p id='notes'>Notes</p>

                    <div class="radio-toolbar">

                        <div className='label-header'>
                            <h1 id='job-label'>Privacy settings:</h1>
                        </div>

                        <div className='privacy'>
                            <div className='radio-container'>
                                <input type='radio'
                                    id='public'
                                    name='privacy'
                                    onChange={this.update("public")}
                                    defaultChecked={this.state.public}
                                    value={true}/>
                                    <label for='public'>Public</label>

                                <input type='radio' 
                                    id='private' 
                                    name='privacy'
                                    onChange={this.update("public")}
                                    defaultChecked={!this.state.public}
                                    value={false} />
                                    <label for='private'>Private</label>
                            </div>
                        </div>
                    </div>


                <div className='radio-toolbar'>

                    <div>
                        <h1 id='job-label'>Priority:</h1>
                    </div>

                    <div class="switch">
                        <input name="priority_switch" 
                            id="low" 
                            type="radio"
                            onChange={this.update("priority")}
                            defaultChecked={this.state.priority === 1}
                            value={1} />
                            <label for="low">Low</label>

                        <input name="priority_switch" 
                            id="medium" t
                            type="radio"
                            onChange={this.update("priority")}
                            defaultChecked={this.state.priority === 2}
                            value={2} />
                            <label for="medium">Medium</label>

                        <input name="priority_switch" 
                            id="high" 
                            type="radio"
                            onChange={this.update("priority")}
                            defaultChecked={this.state.priority === 3}
                            value={3}  />
                            <label for="high">High</label>
                    </div>

                </div>
                    <div className='radio-toolbar'>
                        <div>
                            <h1 id='job-label'>Application Status:</h1>
                        </div>
                        <div className='select'>
                                <select id='drop-down' onChange={this.update("status")} value={this.state.status}>
                                    <option defaultValue={this.state.status === "Haven't applied"} value="Haven't applied">Haven't applied</option>
                                    <option defaultValue={this.state.status === "Applied"} value="Applied">Applied</option>
                                    <option defaultValue={this.state.status === "Call Back"} value="Call Back">Call Back</option>
                                    <option defaultValue={this.state.status === "Phone Interview"} value="Phone Interview">Phone Interview</option>
                                    <option defaultValue={this.state.status === "On-site Interview"} value="On-site Interview">On-site Interview</option>
                                    <option defaultValue={this.state.status === "Offer Received"} value="Offer Received">Offer Received</option>
                                    <option defaultValue={this.state.status === "Offer Accepted"} value="Offer Accepted">Offer Accepted</option>
                                </select>
                                <div class="select_arrow"/>
                        </div> 
                    </div>


                    <div className='radio-toolbar'>
                        <div className='notes'>
                            <h1 id='job-label'>Updates:</h1>
                            {this.displayNotes()}
                        </div>
                    </div>

                <button type="submit" id='save-change-button' value="Save Changes">Save Changes</button>
                <button type="submit" id='delete-job-button' value="Delete Job">Delete Job</button>
            </form>
        </div>
        ) 
    }
}

export default PostEdit