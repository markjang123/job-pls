import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import './session_form.css'
import TypeWriterEffect from 'react-typewriter-effect'
import logo from '../nav/logo192.png'
import { login, signup, clearSessionErrors } from '../../actions/session_actions';

function SessionForm({sessionType, setSessionType}){

    const dispatch = useDispatch()
    const history = useHistory()
    const errors = useSelector((state => state.errors.session))


    function demoUserLogin(e){
        e.preventDefault();
        let demoUser = {
        email: 'demo-user@demo.com',
        password: 'demofordays'
        };
        
        dispatch(login(demoUser)).then(() => {
            history.push("/jobs")
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (sessionType === 'Login') {
                let loginUser = {
                    email: e.currentTarget[0].value,
                    password: e.currentTarget[1].value
                }
            dispatch(login(loginUser))
        } else {
            let newUser = {
                email: e.currentTarget[0].value,
                username: e.currentTarget[1].value,
                password: e.currentTarget[2].value,
                password2: e.currentTarget[3].value,
            }

            dispatch(signup(newUser))
            }
        }


    function renderUsername(){
        if (sessionType === 'Sign Up') {
            return (
                <div>
                    <label>
                        <p className="session-errors">{errors.username}</p>
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

    function renderPassword2(){
        if (sessionType === 'Sign Up') {
            return (
                <div>
                    <label>
                        <p className="session-errors">{errors.password2}</p>
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

        
    function renderLinks() {
        if (sessionType === "Sign Up"){
            return <div onClick={() => dispatch(clearSessionErrors())} 
            className="bottom-message">Have an account?<br/> 
                    <p className='form-link' onClick={() => setSessionType('Login')}>Login!</p>
                <br/>
                <br />
                <p className="demo-login" onClick={e => demoUserLogin(e)}>Or try as a Demo User.</p>
                </div>
        } else {
            return(
            <div className="bottom-message">
                <p onClick={() => dispatch(clearSessionErrors())}>
                    Don't have an account?<br/> 
                    <p className='form-link' onClick={() => setSessionType('Sign Up')}>Sign Up!</p>
                </p>
                <br/>
                <p className="demo-login" onClick={e => demoUserLogin(e)}>Or try as a Demo User.</p>
            </div>
            )
        }
    }

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

                        <h3 className="form-header">{sessionType}</h3>

                        <form onSubmit={e => handleSubmit(e)} className="form-session" autoComplete="off">
                            <br />
                            <div>
                                <label>
                                        <p className="session-errors">{errors.email}</p>
                                    <input type="text"
                                        placeholder='Email'
                                        className="form-element"
                                    />
                                </label>
                                <br />
                                {renderUsername()}
                                <label>
                                        <p className="session-errors">{errors.password}</p>
                                    <input type="password"
                                        placeholder='Password'
                                        className="form-element"
                                    />
                                </label>
                                {renderPassword2()}
                                <br />
                                <input type="submit" id='submit-button' value={sessionType} />
                            </div>
                        </form>
                        {renderLinks()}
                    </div>
                    </div>
                </div>
                </div>
    );
}

export default SessionForm