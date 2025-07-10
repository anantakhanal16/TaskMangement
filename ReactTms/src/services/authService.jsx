// api/userService.js
import axios from 'axios';
import { API_BASE_URL } from '../constants';

export const userLogin = (credentials) =>
  axios.post(`${API_BASE_URL}/account/login`, credentials);

export const userRegistration = (userRegistrationDetails) =>
  axios.post(`${API_BASE_URL}/account/register`, userRegistrationDetails);


export const getUserDetails = () => {
  debugger;
  const token = localStorage.getItem('token'); // 
  return axios.get(`${API_BASE_URL}/account/getUserDetails`, {
    headers: {
      Authorization: `Bearer ${token}`, 
    },
  });
};