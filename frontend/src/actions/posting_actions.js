import { 
    getPostings, 
    getPosting, 
    getUserPostings, 
    writePosting 
} from '../util/posting_api_util';

export const RECEIVE_POSTINGS = "RECEIVE_POSTINGS";
export const RECEIVE_POSTING = "RECEIVE_POSTING";
export const RECEIVE_USER_POSTINGS = "RECEIVE_USER_POSTINGS";
export const RECEIVE_NEW_POSTING = "RECEIVE_NEW_POSTING";

export const receivePostings = postings => {
    return{
        type: RECEIVE_POSTINGS,
        postings
    }
};

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

export const receiveNewPosting = posting => ({
    type: RECEIVE_NEW_POSTING,
    posting
})

export const fetchPostings = () => dispatch => (
    getPostings()
        .then(postings => dispatch(receivePostings(postings)))
        .catch(err => console.log(err))
);

export const fetchPosting = id => dispatch => (
    getPosting(id)
        .then(posting => dispatch(receivePosting(posting)))
        .catch(err => console.log(err))
);

export const fetchUserPostings = id => dispatch => (
    getUserPostings(id)
        .then(postings => dispatch(receiveUserPostings(postings)))
        .catch(err => console.log(err))
);

export const composePosting = data => dispatch => (
    writePosting(data)
        .then(posting => dispatch(receiveNewPosting(posting)))
        .catch(err => console.log(err))
);