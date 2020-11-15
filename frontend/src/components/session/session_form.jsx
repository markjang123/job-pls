import React from 'react';
import { Link } from 'react-router-dom'
import './session_form.css';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sessionType: this.props.sessionType,
            sessionInfo: this.props.sessionInfo,
            other: this.props.other
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoUserLogin = this.demoUserLogin.bind(this);
    }

    demoUserLogin(){
        let demoUser = {
        email: 'demo-user@demo.com',
        password: 'demofordays'
        };
        this.props.loginUser(demoUser).then(() => {
            if (this.props.isAuthenticated) {
                this.props.history.push("/jobs")
            }
        })
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.sessionType === 'Login') {
                let loginUser = {
                    email: e.currentTarget[0].value,
                    password: e.currentTarget[1].value
                }
            this.props.loginUser(loginUser).then(() => {
                if (this.props.isAuthenticated) {
                    this.props.history.push("/jobs")
                }
            })
        } else {
            let newUser = {
                email: e.currentTarget[0].value,
                username: e.currentTarget[1].value,
                password: e.currentTarget[2].value,
                password2: e.currentTarget[3].value,
            }
            this.props.signupUser(newUser).then(() => {
                if (this.props.isAuthenticated) {
                    this.props.history.push("/jobs")
                }
            })
        }
    }

    renderUsername() {
        if (this.state.sessionType === 'Sign Up') {
            return (
                <div>
                    <label>
                        <p className="session-errors">{this.props.errors.username}</p>
                        <input type="text"
                            placeholder='Username'
                            id='form-element'
                        />
                    </label>
                    <br />
                </div>
            )
        }
    }

    renderPassword2() {
        if (this.state.sessionType === 'Sign Up') {
            return (
                <div>
                    <label>
                        <p className="session-errors">{this.props.errors.password2}</p>
                        <input type="password"
                            placeholder='Password 2'
                            id='form-element'
                        />
                    </label>
                    <br />
                </div>
            )
        }
    }



    
    clearErrors() {
        if (Object.keys(this.props.errors).length > 0) {
            return (
                <div id='clear-errors' onClick={this.props.clearSessionErrors}>clear errors</div>
                )
            }
        }
        
        renderLinks() {
            if (this.props.sessionType === "Sign Up"){
                return <p onClick={this.props.clearSessionErrors} 
                className="bottom-message">Have an account?<br/> 
                <Link className="form-link" to="/login">Login!</Link></p>
            } else {
                return(
                <div className="bottom-message">
                    <p onClick={this.props.clearSessionErrors}>
                        Don't have an account?<br/> 
                <Link className="form-link" to="/signup">Sign Up!</Link><br/>
                    </p>
                    <br/>
                    <p onClick={this.demoUserLogin}>Or try our Demo User.</p>
                </div>
                )
            }
        }



    render() {
        return (
            <div className='session-form-container'>
                <div className="session-form">
                    <div className='session-form-liner'>
                    <form onSubmit={this.handleSubmit} className="form-header">
                        <br />
                        <div>
                            {this.clearErrors()}
                            <label>
                                    <p className="session-errors">{this.props.errors.email}</p>
                                <input type="text"
                                    placeholder='Email'
                                    id='form-element'
                                />
                            </label>
                            <br />
                            {this.renderUsername()}
                            <label>
                                    <p className="session-errors">{this.props.errors.password}</p>
                                <input type="password"
                                    placeholder='Password'
                                    id='form-element'
                                />
                            </label>
                            {this.renderPassword2()}
                            <br />
                            <input type="submit" id='submit-button' value={this.formType} />
                        </div>
                    </form>
                    {this.renderLinks()}
                    <div>
                    </div>
                </div>
                </div>
            </div>

        );
    }
}

export default SessionForm;