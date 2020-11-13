// import React from 'react'
// import {login} from '../../actions/session_actions'
// import './session_form.css'
// import {Link} from 'react-router-dom'
// class SessionForm extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = this.props.user
//         this.handleSubmit = this.handleSubmit.bind(this)
//         this.switcharoni = this.switcharoni.bind(this);
//         this.formType = this.props.formType;
//         this.switchForm = this.props.switchForm;
//     }

//     componentWillUnmount(){
//         this.props.clearSessionErrors()
//     }
//     handleSubmit(e){
//         // debugger
//         e.preventDefault()
//         let user = this.state
//         this.props.submitAction(user)
//             .then(() => {
//                 if (this.props.isAuthenticated) {
//                     this.props.history.push("/jobs")
//                 }
//             })
//     }
//     update(field){
//         return e => {
//             this.setState({[field]: e.currentTarget.value})
//         }
//     }
//     renderLinks(){
//         if (this.props.formType === "Sign up"){
//             return <p className="bottom-message">Have an account? <Link className="form-link" to="/login">sign in</Link></p>
//         } else {
//             return <p className="bottom-message">Don't have an account? <Link className="form-link" to="/signup">sign up</Link></p>
//         }
//     }


//     switcharoni(e) {
//         e.preventDefault();
//         // console.log('hello')
//         let sType = this.formType;
//         let fType = this.switchForm;
//         this.formType = this.switchForm;
//         this.switchForm = sType;
//         this.forceUpdate();
//     }

//     renderEmail() {
//         if (this.formType === 'signup') {
//             return (
//                 <div>
//                     <label>
//                         <input type="text"
//                             placeholder='Email'
//                             id='placeholder'
//                             value={this.state.email}
//                             onChange={this.update('email')}
//                         />
//                     </label>
//                     <br />
//                 </div>
//             )
//         }
//     }




//     render() {
//         return(
//             <div className='session-form-container'>
            
//             <div className="session-form">
//                 <div className='session-form-liner'>
//                 <h3 className="form-header">{this.props.formType}</h3>
//                 <form onSubmit={this.handleSubmit}>
                        
//                         <p className="session-errors">{this.props.errors.email && this.props.errors.email}</p>
//                         <input className="email-input form-element" type="text" onChange={this.update("email")} value={this.state.email} placeholder="email" />

                        
//                         <p className="session-errors">{this.props.errors.username && this.props.errors.username}</p>
//                         {this.props.formType === "Sign up" && <input className="username-input form-element" type="text" placeholder="username" onChange={this.update("username")} value={this.state.username}/ >}
                        
                        
//                         <p className="session-errors">{this.props.errors.password && this.props.errors.password}</p>
//                         <input className="password-input form-element" type="password" onChange={this.update("password")} value={this.state.password} placeholder="password" />
                       
                        
//                         <p className="session-errors">{this.props.errors.password2 && this.props.errors.password2}</p>
//                         {this.props.formType === "Sign up" && <input className="password2-input form-element" type="password" placeholder="confirm password" onChange={this.update("password2")} value={this.state.password2}/ >}
//                         <br/>
//                         <br/>
                    
//                         <input className="form-element" id="submit-button" type="submit" value={this.props.formType} />
//                     {this.renderLinks()}
//                 </form>
//             </div>
//             </div>
//             <br/>
//             <br/>
//             <p id='job-pls'>job pls</p>
//             </div>
//         )
//     }
// }

// export default SessionForm;

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
        debugger
        if (this.state.sessionType === 'Login') {
                let loginUser = {
                    email: e.currentTarget[0].value,
                    password: e.currentTarget[1].value
                }
            this.props.loginUser(loginUser).then(() => {
                debugger
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
        console.log('render username')
        // debugger
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
        debugger
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