import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import PostIndexContainer from './postings/post_index_container';
const App = () => {
    return (
        <div> 
            <Route path="/login" component={LoginFormContainer}/>
            <Route path="/signup" component={SignupFormContainer}/>
<<<<<<< HEAD
            <Route path="/" component={SignupFormContainer}/>
=======
            <Route path="/jobs" component={PostIndexContainer}/>
>>>>>>> main
        </div>
    )
}

export default App