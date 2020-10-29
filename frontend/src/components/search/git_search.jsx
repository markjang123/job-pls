const GITHUB_LOCATIONS = [
    'Remote'
    ,'Nashville'
    ,'Orlando'
    ,'Tampa'
    ,'Cincinnati'
    ,'Minneapolis'
    ,'Illinois'
    ,'Virginia'
    ,'Miami'
    ,'San Jose'
    ,'Portland'
    ,'Jacksonville'
    ,'Pittsburgh'
    ,'Louisville'
    ,'Las Vegas'
    ,'Richmond'
    ,'Raleigh'
    ,'Baltimore'
    ,'Indiana'
    ,'North Carolina'
    ,'New Jersey'
    ,'Georgia'
    ,'Cleveland'
    ,'Maryland'
    ,'Fort Worth'
    ,'Omaha '
    ,'New York'
    ,'Washington DC'
    ,'Chicago'
    ,'Atlanta'
    ,'Seattle'
    ,'Dallas'
    ,'San Francisco'
    ,'Los Angeles'
    ,'Phoenix'
    ,'California'
    ,'Houston'
    ,'Austin'
    ,'Boston'
    ,'Florida'
    ,'Charlotte'
    ,'San Diego'
    ,'Texas'
    ,'Denver'
    ,'Pennsylv'
    ,'Philadelphia'
    ,'Columbus'
    ,'San Antonio'
    ,'Indianapolis'
    ,'Saint Louis'
];

const React = require('react');

class GitSearch extends React.Component{

    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        let gitJobRequest = {};
        gitJobRequest['keywords'] = e.currentTarget[0].value;
        gitJobRequest['location'] = e.currentTarget[1].value;
        gitJobRequest['company'] = e.currentTarget[2].value;
        this.props.githubSearchPosting(gitJobRequest);
    }

    render(){

        const { searchedPostings } = this.props
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    
                    <label>Keywords: ie Front End, iOS
                        <input type="text"/>
                    </label>

                    <label>Location
                        <select type="dropdown">
                            {GITHUB_LOCATIONS.map((loc, idx) => {
                                return(
                                    <option key={idx} value={loc}>{`${loc}`}</option>
                                )
                            })}
                        </select>
                    </label>

                    <label>Search for a specific company's postings
                        <input type="text"/>
                    </label>

                    <button>Find another job</button>
                </form>

                {searchedPostings.length === 0 ? <></> :
                    <ul>
                        {searchedPostings.map(posting => {
                            return(
                                <li>
                                    <span>{posting.id}</span>
                                    <span>{posting.company}</span>
                                    <span>{posting.location}</span>
                                    <span>{posting.url}</span>
                                    <span>{posting.title}</span>
                                    <span>{posting.description}</span>
                                    <span>{posting.type}</span>
                                    <span>{posting.created_at}</span>
                                    <span>{posting.how_to_apply}</span>

                                </li>
                            )
                        })}
                    </ul>
                }

            </div>
        )
    }
}

export default GitSearch;