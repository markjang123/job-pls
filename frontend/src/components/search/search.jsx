const JOOBLE_LOCATIONS = [
    'Remote'
    ,'Nashville, TN'
    ,'Orlando, FL'
    ,'Tampa, FL'
    ,'Cincinnati, OH'
    ,'Minneapolis, MN'
    ,'Illinois'
    ,'Virginia'
    ,'Miami, FL'
    ,'San Jose, CA'
    ,'Portland, OR'
    ,'Jacksonville, FL'
    ,'Pittsburgh, PA'
    ,'Louisville, KY'
    ,'Las Vegas, NV'
    ,'Richmond, VA'
    ,'Raleigh, NC'
    ,'Baltimore, MD'
    ,'Indiana'
    ,'North Carolina'
    ,'New Jersey'
    ,'Georgia'
    ,'Cleveland, OH'
    ,'Maryland'
    ,'Fort Worth, TX'
    ,'Omaha, NE '
    ,'New York, NY'
    ,'Washington DC'
    ,'Chicago, IL'
    ,'Atlanta, GA'
    ,'Seattle, WA'
    ,'Dallas, TX'
    ,'San Francisco, CA'
    ,'Los Angeles, CA'
    ,'Phoenix, AZ'
    ,'California'
    ,'Houston, TX'
    ,'Austin, TX'
    ,'Boston, MA'
    ,'Florida'
    ,'Charlotte, NC'
    ,'San Diego, CA'
    ,'Texas'
    ,'Denver, CO'
    ,'Pennsylvania'
    ,'Philadelphia, PA'
    ,'Columbus, OH'
    ,'San Antonio, TX'
    ,'Indianapolis, IN'
    ,'Saint Louis, MO'
];



const React = require('react');

class Search extends React.Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    handleSubmit(e){
        e.preventDefault();
        let returningState = {};
        returningState['keywords'] = e.currentTarget[0].value;
        returningState['location'] = e.currentTarget[1].value;
        returningState['radius'] = e.currentTarget[2].value;
        returningState['salary'] = e.currentTarget[3].value;
        returningState['page'] = '1';
        this.props.searchPosting(returningState);
    }



    render(){

        const {  searchedPostings } = this.props

        return(

            <div>
                <form onSubmit={this.handleSubmit}>

                    <label>Enter keywords for Search
                        <input type="text"/>
                    </label>                  
                    
                    <label>Location
                        <select type="dropdown">
                            {JOOBLE_LOCATIONS.map((loc, idx) => {
                                return(
                                    <option key={idx} value={loc}>{`${loc}`}</option>
                                )
                            })}
                        </select>
                    </label>

                    <label>Radius
                        <input type="text"/>
                    </label>

                    <label>Enter desired Salary
                        <input type="text"/>
                    </label>

                    <button>Find your dream job</button>
                
                </form>

                {searchedPostings.length === 0 ? <></> :
                    <ul>
                        {searchedPostings.map(posting => {
                            return(
                                <li>
                                    <span>{posting.title}</span>
                                    <span>{posting.location}</span>
                                    <span>{posting.snippet}</span>
                                    <span>{posting.salary}</span>
                                    <span>{posting.source}</span>
                                    <span>{posting.type}</span>
                                    <span>{posting.link}</span>
                                    <span>{posting.company}</span>
                                    <span>{posting.id}</span>
                                    <span>{posting.updated}</span>
                                </li>
                            )
                        })}
                    </ul>
                }
            </div>
        )
    }

};


export default Search;
 