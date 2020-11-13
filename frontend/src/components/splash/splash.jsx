import React from 'react';
import LoginFormContainer from '../session/login_form_container';


class Splash extends React.Component{
    constructor(props){
        super(props);
    }
  
    render(){
        return(
            <div className='splash-container'>
                <LoginFormContainer/>
            </div>

        );
    }

}

export default Splash;