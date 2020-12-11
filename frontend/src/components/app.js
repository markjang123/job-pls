import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container'
// import SignupFormContainer from './session/signup_form_container';
import PostIndexContainer from './postings/post_index_container';
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
        debugger
        return(
            <div className='app'>
            <div className='app-content'>
                <NavShowContainer/>
                <Modal />
                <ul className='display-content' >
                    <li id='job-content'>
                        <div className='nav'>
                            <NavButtonsContainer/>
                        </div>
                        <div>
                            <Switch>
                                <AuthRoute exact path="/" component={SplashContainer} formType="signup"/>
                                <ProtectedRoute path="/jobs/:jobId" component={PostShowContainer} />
                                <ProtectedRoute path="/jobs" component={PostIndexContainer} />
                                <ProtectedRoute exact path="/jobs/sorted" component={SortedPostIndexContainer} />
                                <ProtectedRoute path="/search" component={SearchTabContainer} />
                                <ProtectedRoute exact path="/users/:userId" component={UserShowContainer} />
                                <AuthRoute exact path="/login" component={SplashContainer} formType="login" />
                                <AuthRoute exact path="/signup" component={SplashContainer} formType="signup" />
                                {/* <ProtectedRoute path="*" component={PostIndexContainer} /> */}
                            </Switch>
                        </div>
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