import React, {useState} from 'react';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import SessionForm from '../session/session_form'
import "./splash.css"



function Splash(){
    const [sessionType, setSessionType] = useState('Sign Up')


    return(
        <div className='splash-container'>
            <SessionForm sessionType={sessionType} setSessionType={setSessionType}/>
        </div>

    );
}

export default Splash;