import React from 'react'
class PostEdit extends React.Component {
    constructor(props){
        super(props)
        this.state = {public: this.props.post.public,
                    priority: this.props.post.priority
        }
        this.submitHandler = this.submitHandler.bind(this)
    }
    submitHandler(e){
        debugger
        e.preventDefault()
        this.props.updateAPosting(this.props.post._id, this.state)
        this.props.closeEdit()
    }
    update(field){
        debugger
        return e => {
            this.setState({[field]: e.target.value})
        }
    }
    render() {
        debugger
        return <div className="post-edit">
            <form onSubmit={this.submitHandler}>
                <p>Privacy:</p>
                <label> public
                    <input onChange={this.update("public")} defaultChecked={this.state.public} value={true} type="radio" name="privacy"/>
                </label>
                <label> private
                    <input onChange={this.update("public")} defaultChecked={!this.state.public} value={false} type="radio" name="privacy"/>
                </label>
                <label>Priority:
                    <select onChange={this.update("priority")} value={this.state.priority}>
                        <option defaultValue={this.state.priority === "low"} value="low">low</option>
                        <option defaultValue={this.state.priority === "medium"} value="medium">medium</option>
                        <option defaultValue={this.state.priority === "high"} value="high">high</option>
                    </select>
                </label>
                <input type="submit" value="Save Changes"/>
            </form>
        </div>
    }
}

export default PostEdit