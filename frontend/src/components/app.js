import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container'
import PostIndexContainer from './postings/post_index_container';
import PrioritizedPostsContainer from './postings/prioritized_posts_container';
import SortedPostIndexContainer from './postings/sorted_post_index_container'
import PostShowContainer from './postings/post_show_container';
import Modal from './modal/modal.jsx';
import SearchTabContainer from './search/search_tab_container';
import { AuthRoute, ProtectedRoute} from '../util/route_util';
import NavShowContainer from './nav/nav_container';
import NavButtonsContainer from './nav/nav_buttons_container';
import SplashContainer from './splash/splash_container';

import UserShowContainer from './users/user_show_container';
import UserMenuContainer from './users/user_menu_container';

import SessionReducer from '../reducers/root_reducer'

import './app.css';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            usersbarCollapsed: true,
            userRecieved: false
        }
    }

    handleClick(){
        this.setState({
            usersbarCollapsed: !this.state.usersbarCollapsed
        })
    }


    render() {

        return(
            <div className='app'>
                {/* <figure></figure>
                <figure></figure>
                <figure></figure> */}
                <div className='display-content' >
                    <div className='header-content'>
                        <NavButtonsContainer/>
                    </div>
                    <div className='body-content'>
                        <div id='sidebar-content'>
                            <PrioritizedPostsContainer/> 
                        </div>
                        <div id='job-content'>
                                <NavShowContainer/>
                                    <Modal />
                                <Switch>
                                    {/* <AuthRoute exact path="/" component={SplashContainer} formType="signup"/> */}
                                    <ProtectedRoute path="/jobs/:jobId" component={PostShowContainer} />
                                    <ProtectedRoute path="/jobs" component={PostIndexContainer} />
                                    <ProtectedRoute exact path="/jobs/sorted" component={SortedPostIndexContainer} />
                                    <ProtectedRoute path="/search" component={SearchTabContainer} />
                                    <ProtectedRoute exact path="/users/:userId" component={UserShowContainer} />
                                    <AuthRoute exact path="/login" component={SplashContainer} formType="login" />
                                    <AuthRoute exact path="/signup" component={SplashContainer} formType="signup"/>
                                    <AuthRoute exact path="/" component={SplashContainer} formType="signup" />
                                    <ProtectedRoute path='*' component={PostIndexContainer} />
                                </Switch>
                        </div>
                        <div id='sidebar-content'>
                            <UserMenuContainer/>
                        </div>
                    </div>
                </div>
            </div>
    );
    }

}

export default App;