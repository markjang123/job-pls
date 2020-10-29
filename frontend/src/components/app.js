import Modal from './modal/modal.jsx';
import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import PostIndexContainer from './postings/post_index_container';
import PostShowContainer from './postings/post_show_container';
import SearchContainer from './search/search_container';
import GitSearchContainer from './search/git_search_container';
import { AuthRoute, ProtectedRoute} from '../util/route_util'

import UsersIndexContainer from './users/users_index_container'
import UserShowContainer from './users/user_show_container'

const App = () => {

    
    return (
        <div> 
            <Modal/>
            <Route path="/jobs/:jobId" component={PostShowContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer}/>
            <AuthRoute path="/login" component={LoginFormContainer}/>
            <ProtectedRoute path="/jobs" component={PostIndexContainer}/>
            <ProtectedRoute path="/search" component={SearchContainer}/>
            <ProtectedRoute path="/git_search" component={GitSearchContainer}/>
            <Route exact path="/" component={SignupFormContainer}/>
            <Route exact path="/users" component={UsersIndexContainer} />
            <Route exact path="/users/:userId" component={UserShowContainer} />

        </div>
    )
    
}

export default App