import React, {useState, useEffect, useCallback, useMemo} from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { prioritizer, lowPrioritizer, mediumPrioritizer, highPrioritizer } from '../../reducers/jobs_selector'
import PostPriorityItem from './posts_priority_item';
import { randomKeyGen } from '../../util/helper';
import { searchPosting, setLoading, fetchCurrentUserPostings } from '../../actions/posting_actions';
import { fetchAllUsers } from '../../actions/user_actions';

import './post.css';

function PrioritizedPosts(){
    const [priorities, setPriorities] = useState('low')

    const isCurrentUser = useSelector((state => state.session.user))
    const currentUser = Object.values(isCurrentUser).length === 0 ? false : isCurrentUser

    const posts = useSelector((state => state.session.user.followed_posting))

    let priorityObject = {
        highPriority: highPrioritizer(posts),
        mediumPriority: mediumPrioritizer(posts),
        lowPriority: lowPrioritizer(posts)
    }

    function prioritize(priority){
        setPriorities(priority)
    }

    function priorityMenu(){
        return (
            <div className="tabs">
                <input name="tab"
                    className='tab'
                    id="high"
                    type="radio"
                    onClick={() => prioritize('high')}
                    defaultChecked={priorities === 'high'}
                />
                <label htmlFor="high">High
                    ({[...new Set(priorityObject.highPriority)].length})</label>

                <input name="tab"
                    className='tab'
                    id="medium"
                    type="radio"
                    defaultChecked={priorities === 'medium'}
                    onClick={() => prioritize('medium')}
                />
                <label htmlFor="medium">Medium
                  ({[...new Set(priorityObject.mediumPriority)].length})</label>

                <input name="tab"
                    className='tab'
                    id="low"
                    type="radio"
                    onClick={() => prioritize('low')}
                    defaultChecked={priorities === 'low'}
                />
                <label htmlFor="low">Low
                   ({[...new Set(priorityObject.lowPriority)].length})</label>
            </div>
        )
    }

    function prioritySelector(priority){

        switch(priority){
            case ('high'):
                return (
                    <div className='job-priority-container'>
                        { 
                            priorityObject.highPriority.map(post => (
                                <PostPriorityItem
                                    post={post}
                                    key={randomKeyGen()}
                                />
                            ))
                        }
                    </div>
                );
            case ('medium'):
                return (
                    <div className='job-priority-container'>
                        {
                            priorityObject.mediumPriority.map(post => (
                                <PostPriorityItem
                                    post={post}
                                    key={randomKeyGen()}
                                />
                            ))
                        }
                    </div>
                );
            case ('low'):
                return (
                    <div className='job-priority-container'>
                        {
                            priorityObject.lowPriority.map(post => (
                                <PostPriorityItem
                                    post={post}
                                    key={randomKeyGen()}
                                />
                            ))
                        }
                    </div>
                );
            default:
                return (
                    <div className='job-priority-container'>
                        {
                            priorityObject.highPriority.map(post => (
                                <PostPriorityItem
                                    post={post}
                                    key={randomKeyGen()}
                                />
                            ))
                        }
                    </div>

                );        
                }
    }


    if (currentUser){
        if (priorityObject.highPriority.length === 0 && priorityObject.mediumPriority.length === 0 & priorityObject.lowPriority.length === 0){
            return (
                <div className='user-menu'>
                    <div className='menu-header'>My Jobs by priority</div>
                    {priorityMenu()}
                    <div className='no-results'>
                        You haven't saved and prioritized any jobs yet! hit the search! :&#41;
                    </div>
                </div>
            )
        } else {
            return (
                <div className='user-menu'>
                    <div className='menu-header'>My Jobs by priority</div>
                    {priorityMenu()}
                    {prioritySelector(priorities)}
                </div>   
            )
        }
    }
    return null
}

export default PrioritizedPosts;
