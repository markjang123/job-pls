import { CITY_STATE_LIST } from '../search/search_terms';
const React = require('react');

class NavSearch extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        };
        this.handleSubmit = this.handleSubmit.bind(this);
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
        // debugger
        this.props.searchPosting(returningState)
        .then(() => this.props.history.push('/search'))
    }

    render(){
        
        return(
            // <div className='search-container'>
                <form className='search-form' onSubmit={this.handleSubmit}>
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

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
            // </div>
        )
    }

};


export default NavSearch;
 