import React, {useEffect, useRef} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom'


import { fetchAllUsers } from '../../actions/user_actions';
import { searchPosting, setLoading, fetchCurrentUserPostings } from '../../actions/posting_actions';

import { CITY_STATE_LIST } from '../search/search_terms';
import { randomKeyGen } from '../../util/helper';

function NavSearch({currentUserId}){

    const getUsers = useSelector((state => state.entities.users))
    const hasUsers = !!getUsers

    const searchForm = useRef(null)
    const dispatch = useDispatch()
    const history = useHistory()


    useEffect(() => {
        if(hasUsers){
            dispatch(fetchAllUsers())
            .then(dispatch(fetchCurrentUserPostings(currentUserId)))
        }
    }, [hasUsers])
    
    function handleSubmit(e){
        e.preventDefault();

        let formData = searchForm.current
        let returningState = {};
        returningState['keywords'] = formData['keywords'].value;
        returningState['company'] = formData['company'].value;
        returningState['location'] = formData['location'].value;
        returningState['radius'] = formData['radius'].value;
        returningState['salary'] = formData['salary'].value;
        returningState['page'] = '1';
        history.push('/search');
        dispatch(setLoading())
        dispatch(searchPosting(returningState))
    }

        
    return(            
        <div className='nav-container'>
            <form ref={searchForm} className='search-form' onSubmit={handleSubmit} autoComplete="off">
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <div className='search-inputs-divs'>
                        <div className='search-input-div'>
                            <div id='search-bar-container'>
                                <input 
                                    type="text" 
                                    id='search' 
                                    placeholder='Enter keywords for Search.'
                                    name={'keywords'} />
                            </div>
                            <div id='company-search-container'>
                                <input 
                                    type="text" 
                                    id='company-search' 
                                    placeholder='See if your dream company is hiring.'
                                    name={'company'}
                                    />
                            </div>
                            <div className='search-button-div'>
                                <button 
                                    id='search-button' 
                                    type='submit'
                                    >
                                        <i className="material-icons">search</i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='selects'>
                            <div className='nav-select'>
                                <select 
                                    className='border'
                                    type="dropdown"
                                    name={'location'} 
                                    required>
                                    <option 
                                        value="Remote" 
                                        disabled 
                                        selected 
                                        hidden>
                                            Location
                                    </option>
                                    {CITY_STATE_LIST.map((loc, idx) => {
                                        return (
                                            <option
                                                key={randomKeyGen()}
                                                value={loc}>
                                                {`${loc}`}
                                            </option>
                                        )
                                    })}
                                </select>                           
                            </div>  
                        <div className='nav-select'>
                            <select 
                                className='border'
                                type="dropdown"
                                name={'radius'} >
                                <option 
                                    value="25" 
                                    disabled 
                                    selected 
                                    hidden>
                                        How far do you want to drive?
                                </option>
                                {['5', '10', '25', '50', '75', '100'].map((radi, idx) => {
                                    return (
                                        <option
                                            key={randomKeyGen()}
                                            value={radi}>
                                            {`${radi} miles`}
                                        </option>
                                    )
                                })}
                            </select>
                            
                        </div>

                        <div className='nav-select'>
                            <select 
                                className='border'
                                type="dropdown" 
                                placeholder='salary'
                                name={'salary'} >
                                <option 
                                    value="1" 
                                    disabled 
                                    selected 
                                    hidden>
                                        Salary
                                </option>
                                {['20000'
                                , '40000'
                                , '60000'
                                , '80000'
                                , '100000'
                                , '120000'].map((salaryNum, idx) => {
                                    return (
                                        <option 
                                            key={randomKeyGen()} 
                                            value={salaryNum}>
                                                {`${salaryNum}`}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
            </form>
        </div>
    )
}


export default NavSearch;
 