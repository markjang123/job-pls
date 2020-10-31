import React from 'react'
import {login} from '../../actions/session_actions'
import './session_form.css'
import {Link} from 'react-router-dom'
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
        // debugger
        e.preventDefault()
        let user = this.state
        this.props.submitAction(user)
            .then(() => {
                if (this.props.isAuthenticated) {
                    this.props.history.push("/jobs")
                }
            })
    }
    update(field){
        return e => {
            this.setState({[field]: e.currentTarget.value})
        }
    }
    renderLinks(){
        if (this.props.formType === "Sign up"){
            return <p className="bottom-message">Have an account? <Link className="form-link" to="/login">sign in</Link></p>
        } else {
            return <p className="bottom-message">Don't have an account? <Link className="form-link" to="/signup">sign up</Link></p>
        }
    }
    render() {
        return(
            <div className='session-form-container'>
            
            <div className="session-form">
                <div className='session-form-liner'>
                <h3 className="form-header">{this.props.formType}</h3>
                <form onSubmit={this.handleSubmit}>
                        
                        <p className="session-errors">{this.props.errors.email && this.props.errors.email}</p>
                        <input className="email-input form-element" type="text" onChange={this.update("email")} value={this.state.email} placeholder="email" />

                        
                        <p className="session-errors">{this.props.errors.username && this.props.errors.username}</p>
                        {this.props.formType === "Sign up" && <input className="username-input form-element" type="text" placeholder="username" onChange={this.update("username")} value={this.state.username}/ >}
                        
                        
                        <p className="session-errors">{this.props.errors.password && this.props.errors.password}</p>
                        <input className="password-input form-element" type="password" onChange={this.update("password")} value={this.state.password} placeholder="password" />
                       
                        
                        <p className="session-errors">{this.props.errors.password2 && this.props.errors.password2}</p>
                        {this.props.formType === "Sign up" && <input className="password2-input form-element" type="password" placeholder="confirm password" onChange={this.update("password2")} value={this.state.password2}/ >}
                        <br/>
                        <br/>
                    
                        <input className="form-element" id="submit-button" type="submit" value={this.props.formType} />
                    {this.renderLinks()}
                </form>
            </div>
            </div>
            <br/>
            <br/>
            <p id='job-pls'>job pls</p>
            </div>
        )
    }
}

export default SessionForm;
