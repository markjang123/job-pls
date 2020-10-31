import { CITY_STATE_LIST } from './search_terms';
import PostingItemContainer from './posting_item_container';
import './search.css'

const React = require('react');

class Search extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            searched: false,
            selectedPost: this.props.searchedPostings[0]
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
        .then(postings => this.selectPost(0))
        .then(() => this.setState({searched: true}));
    }



    selectPost(idx){
        // debugger
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

            <div className='search-container'>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <form className='search-form' onSubmit={this.handleSubmit}>

                    <div className='search-input-div'>
                        <input type="text" placeholder='Enter keywords for Search.'/>            
                        <input type="text" placeholder='See if your dream company is hiring.'/>
                        <button><i class="material-icons">search</i></button>
                    </div>

                    <div className='search-dropdown-div'>
                        <select className='location-dropdown' type="dropdown" required>
                            <option value="Remote" disabled selected hidden>Location</option> 
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

                        <select className='radius-dropdown' type="dropdown">
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

                        <select className='salary-dropdown' type="dropdown" placeholder='salary'>
                        <option value="1" disabled selected hidden>Salary</option> 
                            {['20000','40000','60000','80000','100000','120000'].map((salaryNum, idx) => {
                                return(
                                    <option key={idx} value={salaryNum}>{`${salaryNum}`}</option>
                                )
                            })}
                        </select>
                    </div>
                
                </form>
                <div className='search-result-container'>
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
                                            <div className='posting-list-title'>{posting.title ? this.niceDescription(posting.title) : ''}</div>
                                            <div className='posting-list-location'>{posting.location ? this.niceDescription(posting.location) : ''}</div>
                                            <div className='posting-list-company'>Company: {posting.company ? this.niceDescription(posting.company) : ''}</div>
                                    </li>
                                )
                            })}
                        </ul>
                    }

                    {!this.state.searched ? <></> : 
                        <PostingItemContainer posting={this.state.selectedPost} />
                    }
                </div>

            </div>
        )
    }

};


export default Search;
 