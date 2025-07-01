import axios from 'axios';
import { API_BASE_URL } from '../constants';

const API_URL = `${API_BASE_URL}/Task`;

export const createTask = (task) => axios.post(API_URL, task);
export const updateTask = (id, task) => axios.put(`${API_URL}/${id}`, task);
export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);
export const getTasks = () => axios.get(API_URL);
