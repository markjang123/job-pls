import React from 'react'

import './session_form.css'

class SessionForm extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.user
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillUnmount(){
        this.props.clearSessionErrors()
    }
    handleSubmit(e){
        e.preventDefault()
        let user = this.state
        this.props.submitAction(user)
    }
    update(field){
        return e => {
            this.setState({[field]: e.currentTarget.value})
        }
    }

    render() {
        return <div className="session-form">
            <h3>{this.props.formType}</h3>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text" onChange={this.update("email")} value={this.state.email} placeholder="email" />
                    {this.props.errors.email && <p>{this.props.errors.email}</p>}
                </div>
                <div>
                    {this.props.formType === "Sign up" && <input type="text" placeholder="username" onChange={this.update("username")} value={this.state.username}/ >}
                    {this.props.errors.username && <p>{this.props.errors.username}</p>}
                </div>
                <div>
                    <input type="password" onChange={this.update("password")} value={this.state.password} placeholder="password" />
                    {this.props.errors.password && <p>{this.props.errors.password}</p>}
                </div>
                <div>
                    {this.props.formType === "Sign up" && <input type="password" placeholder="confirm password" onChange={this.update("password2")} value={this.state.password2}/ >}
                    {this.props.errors.password2 && <p>{this.props.errors.password2}</p>}
                </div>
                <input type="submit" value={this.props.formType} />
            </form>
        </div>
    }
}

export default SessionForm;
