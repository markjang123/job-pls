import axios from 'axios';

export const fetchUser = id => {
    return axios.get(`/api/users/${id}`)
};

export const fetchAllUsers = () => {
    return axios.get(`/api/users`)
};

export const updateUser = (id, userData) => {
    return axios.put(`/api/users/${id}`, userData)
};