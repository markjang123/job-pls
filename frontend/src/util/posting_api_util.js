import axios from 'axios';

export const getPostings = () => {
    return axios.get('/api/postings')
};

export const getPosting = id => {
    return axios.get(`/api/postings/${id}`)
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

export const destroy1Posting = (id, user) => {
    return axios.delete(`/api/postings/${id}`, user)
};

export const updatePosting = (id, posting) => {
    return axios.put(`api/postings/${id}`, posting)
}
