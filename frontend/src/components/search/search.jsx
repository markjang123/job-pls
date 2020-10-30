import { CITY_STATE_LIST } from './search_terms'

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
        returningState['company'] = e.currentTarget[4].value;
        returningState['page'] = '1';
        this.props.searchPosting(returningState);
    }

    niceDescription(text){
        return text.replace(/<style[^>]*>.*<\/style>/gm, '')
        .replace(/<script[^>]*>.*<\/script>/gm, '')
        .replace(/<[^>]+>/gm, '')
        .replace(/([\r\n]+ +)+/gm, '');
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
                            {CITY_STATE_LIST.map((loc, idx) => {
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

                    <label>Specify a company?
                        <input type="text"/>
                    </label>

                    <button>Find your dream job</button>
                
                </form>

                {searchedPostings.length === 0 ? <></> :
                    <ul>
                        {searchedPostings.map(posting => {
                            return(
                                <li>
                                    <div>{posting.title ? posting.title : ''}</div>
                                    <div>{posting.location ? posting.location : ''}</div>
                                    <div>{posting.snippet ? posting.snippet : ''}</div>
                                    <div>{posting.salary ? posting.salary : ''}</div>
                                    <div>{posting.source ? posting.source : ''}</div>
                                    <div>{posting.type ? posting.type : ''}</div>
                                    <div>{posting.link ? posting.link : ''}</div>
                                    <div>{posting.company ? posting.company : ''}</div>
                                    <div>{posting.id ? posting.id : ''}</div>
                                    <div>{posting.updated ? posting.updated : ''}</div>
                                    <div>{posting.url ? posting.url : ''}</div>
                                    <div>{posting.description? this.niceDescription(posting.description) : ''}</div>
                                    <div>{posting.created_at ? posting.created_at : ''}</div>
                                    <div>{posting.how_to_apply ? posting.how_to_apply : ''}</div>

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
 