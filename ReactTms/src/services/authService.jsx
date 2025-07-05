// api/userService.js
import axios from 'axios';
import { API_BASE_URL } from '../constants';

export const userLogin = (credentials) =>
  axios.post(`${API_BASE_URL}/account/login`, credentials);
