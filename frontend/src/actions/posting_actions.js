import * as postingAPIUtil from '../util/posting_api_util';

export const RECEIVE_POSTINGS = "RECEIVE_POSTINGS";
export const RECEIVE_POSTING = "RECEIVE_POSTING";
export const RECEIVE_USER_POSTINGS = "RECEIVE_USER_POSTINGS";
export const RECEIVE_CURRENT_USER_POSTINGS = 'RECEIVE_CURRENT_USER_POSTINGS';
export const RECEIVE_NEW_POSTING = "RECEIVE_NEW_POSTING";
export const RECEIVE_SEARCHED_POSTING = 'RECEIVE_SEARCHED_POSTING';
export const DESTROY_POSTING = 'DESTROY_POSTING';
export const UPDATE_POSTING = 'UPDATE_POSTING';
export const SET_CURRENT_POSTING = 'SET_CURRENT_POSTING';
export const SET_LOADING_STATE = 'SET_LOADING_STATE';



const receivePostings = postings => {
    return{
        type: RECEIVE_POSTINGS,
        postings
    }
};

const receiveUpdatedPosting = posting => {
    return {
        type: UPDATE_POSTING,
        posting
    }
};

const receivePosting = posting => {
    return {
        type: RECEIVE_POSTING,
        posting
    }
};

const receiveUserPostings = (userId, postings) => ({
    type: RECEIVE_USER_POSTINGS,
    postings,
    userId
});


const receiveCurrentUserPostings = (userId, postings) => ({
    type: RECEIVE_CURRENT_USER_POSTINGS,
    postings,
    userId
});

const destroyPosting = postingId => ({
    type: DESTROY_POSTING,
    postingId
});

const receiveNewPosting = posting => ({
    type: RECEIVE_NEW_POSTING,
    posting
});

const receiveSearchedPosting = postings => ({
    type: RECEIVE_SEARCHED_POSTING,
    postings
});

const updatedPosting = posting => ({
    type: UPDATE_POSTING,
    posting
});

const currentPosting = posting => ({
    type: SET_CURRENT_POSTING,
    posting
});

const setLoadingState = () => ({
    type: SET_LOADING_STATE
});


export const fetchPostings = () => dispatch => (
    postingAPIUtil.getPostings()
        .then(postings => {
            dispatch(receivePostings(postings.data))})
        .catch(err => console.log(err))
);

export const fetchPosting = id => dispatch => {
    console.log("fetchPosting action, id",id)
    return postingAPIUtil.getPosting(id)
        .then(posting => dispatch(receivePosting(posting)))
        .catch(err => console.log(err))
};

export const fetchUserPostings = id => dispatch => {
    console.log("fetchUserPostings action, id",id)
    return postingAPIUtil.getUserPostings(id)
        .then(postings => {
            dispatch(receiveUserPostings(id ,postings))
        })
        .catch(err => {
            console.log(err)
        })
};

export const fetchCurrentUserPostings = id => dispatch => {
return (
    postingAPIUtil.getUserPostings(id)
        .then(postings => {
            dispatch(receiveUserPostings(id, postings));
            dispatch(receiveCurrentUserPostings(id ,postings));
        })
        .catch(err => {
            console.log(err)
        })
)};

export const composePosting = data => dispatch => (
    postingAPIUtil.writePosting(data)
        .then(posting => dispatch(receiveNewPosting(posting)))
        .catch(err => console.log(err))
);

export const searchPosting = data => dispatch => (
    postingAPIUtil.searchAPIPosting(data)
        .then(postings => dispatch(receiveSearchedPosting(postings)))
        .catch(err => console.log(err))
);

export const deletePosting = postingId => dispatch => {
    return postingAPIUtil.destroy1Posting(postingId)
};

export const updateAPosting = (postingId, postingData) => dispatch => {
    return postingAPIUtil.updatePosting(postingId, postingData)
        .then(response => postingAPIUtil.getPosting(postingId))
        .then(response => dispatch(receiveUpdatedPosting(response.data)))
        .catch(err => console.log(err));
};

export const setCurrentPosting = (posting) => dispatch => (
    dispatch(currentPosting(posting))
);

export const setLoading = () => dispatch => (
    dispatch(setLoadingState())
)
