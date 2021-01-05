import React from 'react'
import { Link } from 'react-router-dom'
import './session_form.css'
import TypeWriterEffect from 'react-typewriter-effect'
import logo from '../nav/logo192.png'


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sessionType: this.props.sessionType,
            sessionInfo: this.props.sessionInfo,
            other: this.props.other
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.demoUserLogin = this.demoUserLogin.bind(this)
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
                            className="form-element"
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
                            placeholder='Confirm Password'
                            className="form-element"
                        />
                    </label>
                    <br />
                </div>
            )
        }
    }

        
        renderLinks() {
            if (this.props.sessionType === "Sign Up"){
                return <div onClick={this.props.clearSessionErrors} 
                className="bottom-message">Have an account?<br/> 
                        <Link className="form-link" to="/login">Login!</Link>
                    <br/>
                    <br />
                    <p className="demo-login" onClick={this.demoUserLogin}>Or try as a Demo User.</p>
                   </div>
            } else {
                return(
                <div className="bottom-message">
                    <p onClick={this.props.clearSessionErrors}>
                        Don't have an account?<br/> 
                        <Link className="form-link" to="/signup">Sign Up!</Link><br/>
                    </p>
                    <br/>
                    <p className="demo-login" onClick={this.demoUserLogin}>Or try as a Demo User.</p>
                </div>
                )
            }
        }


    render() {
        return (
                <div className="session-form">




                    <div className='session-form-liner-border'>
                    <div className='session-form-liner'>
                        <div className='banner'>
                            <div className='banner-header'>
                                <img alt="" src={logo} width='25px'></img>
                                <p>
                                    Job Pls - search for:
                                </p>
                            </div>
                            <div className='banner-body'>
                                <TypeWriterEffect
                                    textStyle={{
                                    color: '#3F3D56',
                                    fontWeight: 900,
                                    fontSize: '1.75em',
                                    }}
                                    startDelay={750}
                                    cursorColor="#3F3D56"
                                    multiText={[
                                    'full stack jobs.',
                                    'front-end dev.',
                                    'MERN stack jobs.',
                                    'Ruby on Rails jobs.',
                                    'React JS jobs.',
                                    'Find the best fit!!!',
                                    ]}
                                    loop={true}
                                    nextTextDelay={2000}
                                    typeSpeed={100}
                                />
                            </div>

                            <h3 className="form-header">{this.state.sessionType}</h3>

                            <form onSubmit={this.handleSubmit} className="form-session" autocomplete="off">
                                <br />
                                <div>
                                    <label>
                                            <p className="session-errors">{this.props.errors.email}</p>
                                        <input type="text"
                                            placeholder='Email'
                                            className="form-element"
                                        />
                                    </label>
                                    <br />
                                    {this.renderUsername()}
                                    <label>
                                            <p className="session-errors">{this.props.errors.password}</p>
                                        <input type="password"
                                            placeholder='Password'
                                            className="form-element"
                                        />
                                    </label>
                                    {this.renderPassword2()}
                                    <br />
                                    <input type="submit" id='submit-button' value={this.state.sessionType} />
                                </div>
                            </form>
                            {this.renderLinks()}
                        </div>
                        </div>
                    </div>
                    </div>




                
             

        );
    }
}

export default SessionForm;