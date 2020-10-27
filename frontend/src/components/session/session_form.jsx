import React from 'react'
import './session_form.css'
class SessionForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e){
        e.preventDefault()
        let user = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.login(user)
    }
    update(field){
        return e => {
            this.setState({[field]: e.currentTarget.value})
        }
    }
    render() {
        debugger
        return <div className="session-form">
            <h3>{this.props.formType}</h3>
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.update("email")} value={this.state.email} placeholder="email" />
                <input type="password" onChange={this.update("password")} value={this.state.password} placeholder="password" />
                {this.props.user.username && <input type="username" placeholder="username"></input>}
                <input type="submit" value="sign in" />
            </form>
        </div>
    }
}

export default SessionForm