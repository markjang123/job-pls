import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container'
// import SignupFormContainer from './session/signup_form_container';
import PostIndexContainer from './postings/post_index_container';
import PostShowContainer from './postings/post_show_container';
import Modal from './modal/modal.jsx';
import SearchTabContainer from './search/search_tab_container';
import { AuthRoute, ProtectedRoute} from '../util/route_util';
import NavShowContainer from './nav/nav_container';
import SplashContainer from './splash/splash_container';

import UserShowContainer from './users/user_show_container';
import UserMenuContainer from './users/user_menu_container';

import './app.css';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            usersbarCollapsed: true
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
            <div className='app-content'>
                <NavShowContainer/>
                <Modal />
                <div className='border-bottom'>
                </div>
                <ul className='display-content' >
                    <li id='job-content'><Switch>
                        <AuthRoute exact path='/' component={SplashContainer} />
                        <ProtectedRoute path="/jobs/:jobId" component={PostShowContainer} />
                        <ProtectedRoute path="/jobs" component={PostIndexContainer} />
                        <ProtectedRoute path="/search" component={SearchTabContainer} />
                        <ProtectedRoute exact path="/users/:userId" component={UserShowContainer} />
                        <AuthRoute exact path="/login" component={LoginFormContainer} />
                        <AuthRoute exact path="/signup" component={SignupFormContainer} />
                        {/* <ProtectedRoute path="*" component={PostIndexContainer} /> */}
                    </Switch>
                    </li>
                    <li id='sidebar-content'>
                        <UserMenuContainer/>
                    </li>
                </ul>
            </div>
        </div>
    );
    }

}

export default App;