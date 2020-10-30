import { CITY_STATE_LIST } from './search_terms';
import PostingItemContainer from './posting_item_container';

const React = require('react');

class Search extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            searched: false,
            selectedPost: {id: undefined}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.selectPost = this.selectPost.bind(this);
    }

    
    handleSubmit(e){
        e.preventDefault();
        let returningState = {};
        returningState['keywords'] = e.currentTarget[0].value;
        returningState['company'] = e.currentTarget[1].value;
        returningState['location'] = e.currentTarget[3].value;
        returningState['radius'] = e.currentTarget[4].value;
        returningState['salary'] = e.currentTarget[5].value;
        returningState['page'] = '1';
        this.props.searchPosting(returningState)
        .then((postings) => this.setState({searched: true}));
    }



    selectPost(idx){
        debugger
        this.setState({ selectedPost: this.props.searchedPostings[idx]});
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

                    <div>
                        <input type="text" placeholder='Enter keywords for Search'/>            
                        <input type="text" placeholder='Have a company in mind? See if they are hiring.'/>
                        <button>Find your dream job</button>
                    </div>

                    <div>
                        <label>Location
                            <select type="dropdown" required>
                                {CITY_STATE_LIST.map((loc, idx) => {
                                    return(
                                        <option 
                                            key={idx} 
                                            value={loc}>
                                                {`${loc}`}
                                        </option>
                                    )
                                })}
                            </select>
                        </label>

                        <select type="dropdown">
                        <option value="25" disabled selected hidden>How far do you want to drive?</option> 
                            {['5','10','25','50','75','100'].map((radi, idx) => {
                                return(
                                    <option 
                                        key={idx} 
                                        value={radi}>
                                            {`${radi} miles`}
                                    </option>
                                )
                            })}
                        </select>

                        <select type="dropdown" placeholder='salary'>
                        <option value="1" disabled selected hidden>Salary</option> 
                            {['20000','40000','60000','80000','100000','120000'].map((salaryNum, idx) => {
                                return(
                                    <option key={idx} value={salaryNum}>{`${salaryNum}`}</option>
                                )
                            })}
                        </select>
                    </div>
                
                </form>

                {!this.state.searched ? <></> :
                    <ul className='posting-list'>
                        {searchedPostings.map((posting, idx) => {
                            return(
                                <li 
                                    onClick={() => this.selectPost(idx)}
                                    key={posting.id} 
                                    id={posting === this.state.selectedPost 
                                    ? 'selected-posting' 
                                    : null}>
                                        <div>{posting.title ? this.niceDescription(posting.title) : ''}</div>
                                        <div>{posting.location ? this.niceDescription(posting.location) : ''}</div>
                                        <div>{posting.company ? this.niceDescription(posting.company) : ''}</div>
                                </li>
                            )
                        })}
                    </ul>
                }

                {!this.state.searched ? <></> : 
                    <PostingItemContainer posting={this.state.selectedPost} />
                }


            </div>
        )
    }

};


export default Search;
 