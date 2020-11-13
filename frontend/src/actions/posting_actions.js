import * as postingAPIUtil from '../util/posting_api_util';

export const RECEIVE_POSTINGS = "RECEIVE_POSTINGS";
export const RECEIVE_POSTING = "RECEIVE_POSTING";
export const RECEIVE_USER_POSTINGS = "RECEIVE_USER_POSTINGS";
export const RECEIVE_NEW_POSTING = "RECEIVE_NEW_POSTING";
export const RECEIVE_SEARCHED_POSTING = 'RECEIVE_SEARCHED_POSTING';
export const DESTROY_POSTING = 'DESTROY_POSTING';
export const UPDATE_POSTING = 'UPDATE_POSTING';
export const SET_CURRENT_POSTING = 'SET_CURRENT_POSTING';
export const SET_LOADING_STATE = 'SET_LOADING_STATE';



export const receivePostings = postings => {
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
}

export const receivePosting = posting => {
    return {
        type: RECEIVE_POSTING,
        posting
    }
};

export const receiveUserPostings = postings => ({
    type: RECEIVE_USER_POSTINGS,
    postings
});

export const destroyPosting = postingId => ({
    type: DESTROY_POSTING,
    postingId
});

export const receiveNewPosting = posting => ({
    type: RECEIVE_NEW_POSTING,
    posting
});

export const receiveSearchedPosting = postings => ({
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

export const fetchPosting = id => dispatch => (
    postingAPIUtil.getPosting(id)
        .then(posting => dispatch(receivePosting(posting)))
        .catch(err => console.log(err))
);

export const fetchUserPostings = id => dispatch => (
    postingAPIUtil.getUserPostings(id)
        .then(postings => {
            dispatch(receiveUserPostings(postings))
        })
        .catch(err => console.log(err))
);

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

export const deletePosting = postingId => dispatch => (
    postingAPIUtil.destroy1Posting(postingId)
        .then(() => dispatch(destroyPosting(postingId)))
        .catch(err => console.log(err))
);

export const updateAPosting = (postingId, postingData) => dispatch => {
    return postingAPIUtil.updatePosting(postingId, postingData)
        .then(response => console.log(`Reponse from updatePosting: ${response.data}`))
        .catch(err => console.log(err));
};

export const setCurrentPosting = (posting) => dispatch => (
    dispatch(currentPosting(posting))
);

export const setLoading = () => dispatch => (
    dispatch(setLoadingState())
)
