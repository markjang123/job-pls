import axios from 'axios';

export const getPostings = () => {
    // debugger
    return axios.get('/api/postings')
};

export const getUserPostings = id => {
    return axios.get(`/api/postings/user/${id}`)
};

export const writePosting = data => {
    return axios.post('/api/postings/', data)
};

export const searchAPIPosting = data => {
    return axios.post('/api/postings/search', data)
};

export const githubSearchAPIPosting = data => {
    return axios.post('/api/postings/git_search', data)
};