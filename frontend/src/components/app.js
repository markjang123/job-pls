import Modal from './modal/modal.jsx';
import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import PostIndexContainer from './postings/post_index_container';
import PostShowContainer from './postings/post_show_container';
import UsersContainer from './users/users_container';

const App = () => {

    
    return (
        <div> 
            <Modal/>
            <Route path="/login" component={LoginFormContainer}/>
            <Route path="/signup" component={SignupFormContainer}/>
            <Route path="/users" component={UsersContainer}/>
            <Route exact path="/jobs" component={PostIndexContainer}/>
            <Route path="/jobs/:jobId" component={PostShowContainer} />
        </div>
    )
    
}

export default App