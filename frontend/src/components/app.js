import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import PostIndexContainer from './postings/post_index_container';
import SearchContainer from './search/search_container';
import UsersIndexContainer from './users/users_index_container'

const App = () => {
    return (
        <div> 
            <Route path="/login" component={LoginFormContainer}/>
            <Route path="/signup" component={SignupFormContainer}/>
            <Route path="/jobs" component={PostIndexContainer}/>
            <Route path="/search" component={SearchContainer}/>
            <Route exact path="/" component={SignupFormContainer}/>
            <Route path="/users" component={UsersIndexContainer} />

        </div>
    )
}

export default App