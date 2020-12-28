import React from 'react';
import UserPostsIndexItem from './user_posts_index_item';

class UserPostsIndex extends React.Component {

    render() {

        {
            if (this.props.jobs.length < 1) {
                return (
                    <div className='no-results'>
                        Looks like this user hasn't saved any jobs yet.
                    </div>
                )
            }
        }

        return <ul className="user-posts-index">
            {this.props.jobs.reverse().map(job =>
                job === undefined
                    ? null
                    : <UserPostsIndexItem
                        key={job._id}
                        job={job}
                    />
            )}
        </ul>
    }
}

export default UserPostsIndex;