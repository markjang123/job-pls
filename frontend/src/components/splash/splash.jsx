import React from 'react';
import background from '../../images/pexels-cadeau-maestro-1170412-min.jpg'
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import "./splash.css"


class Splash extends React.Component{
    constructor(props){
        super(props);
    }


    
    render(){
        return(
            <div className='splash-container'>
                { this.props.formType === "signup" ? <SignupFormContainer /> : <LoginFormContainer />}
             </div>

        );
    }

}

export default Splash;