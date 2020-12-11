import React from 'react';
import background from '../../images/pexels-cadeau-maestro-1170412-min.jpg'
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import "./splash.css"


class Splash extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
        window.addEventListener('scroll', (e) => console.log(e))
        document.addEventListener('click', (e) => console.log(e))
    }
    render(){
        debugger
        return(
            <div className='splash-container'>
                
                { this.props.formType === "signup" ? <SignupFormContainer/> : <LoginFormContainer/>}
                <div className="bg-image image-1">
                    <div className="greeting-background">
                    <div className="splash-greeting">
                            Streamline your job search 
                            <p className="greeting-subtitle">
                                Track all your applications in one spot,                        
                                from initial apply to  <br /> offer received
                            </p>              
                        </div> 
                        <div className="text-screen" />
                    </div>
                </div>
                <div className="other-image">
                    <div className="greeting-background">
                        <div className="splash-greeting">
                                Stay motivated 
                                <p className="greeting-subtitle">
                                    Share you progress and see other's progress through the interview process <br/>
                                </p>              
                            </div> 
                            <div className="text-screen" />
                        </div>
                </div>
                <div className="bg-image image-3">
                    <div className="greeting-background">
                        <div className="splash-greeting">
                                Change your life 
                                <p className="greeting-subtitle">
                                    View other's offers to better negotiate yours and maximize <br/> your compensation
                                    <br />
                                    <br />
                                    Sign up today
                                </p>              
                            </div> 
                            <div className="text-screen" />
                        </div>
                </div>
            </div>

        );
    }

}

export default Splash;