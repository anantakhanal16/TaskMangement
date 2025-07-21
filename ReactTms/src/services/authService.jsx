// api/userService.js
import axios from 'axios';
import { API_BASE_URL } from '../constants';

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export const userLogin = (credentials) =>
  api.post('/account/login', credentials);

export const userRegistration = (userRegistrationDetails) =>
  api.post('/account/register', userRegistrationDetails);

export const getUserDetails = () => {
  return api.get('/account/getUserDetails');
};
export const userLogout = () => {
  return api.post('/account/logout');
};

