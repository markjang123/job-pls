import React from 'react';
// import SessionFormContainer from '../session/signup_form_container';
import LoginFormContainer from '../session/login_form_container';
// import SignupFormContainer from './session/signup_form_container';


class Splash extends React.Component{
    constructor(props){
        super(props)
    }

    check

  
    render(){
        // debugger
        console.log('logging props')
        console.log(this.props)
        return(
            <div className='splash-container'>
                <LoginFormContainer/>
            </div>

        )
    }

}

export default Splash