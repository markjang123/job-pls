import React from 'react';
import { Switch } from 'react-router-dom';
import PostIndex from './postings/post_index';
import PrioritizedPosts from './postings/prioritized_posts';
import PostShow from './postings/post_show';
import Modal from './modal/modal.jsx';
import SearchTab from './search/search_tab';
import { AuthRoute, ProtectedRoute} from '../util/route_util';
import Nav from '../components/nav/nav'
import NavButtons from './nav/NavButtons';
import Splash from './splash/splash';

import UserShow from './users/user_show';
import UserMenu from './users/user_menu';

import './app.css';


function App(){
    return(
        <div className='app'>
            <div className='display-content' >
                <div className='header-content'>
                    <NavButtons/>
                </div>
                <div className='body-content'>
                    <div id='sidebar-content'>
                        <PrioritizedPosts/> 
                    </div>
                    <div id='job-content'>
                            <Nav/>
                                <Modal />
                            <Switch>                               
                                <ProtectedRoute path="/jobs/:jobId" component={PostShow} />
                                <ProtectedRoute path="/jobs" component={PostIndex} />
                                <ProtectedRoute path="/search" component={SearchTab} />
                                <ProtectedRoute exact path="/users/:userId" component={UserShow} />
                                <AuthRoute exact path="/" component={Splash} />
                                <ProtectedRoute path='*' component={PostIndex} />
                            </Switch>
                    </div>
                    <div id='sidebar-content'>
                        <UserMenu/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;