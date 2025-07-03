import axios from 'axios';
import { API_BASE_URL } from '../constants';

// Base API path
const TASK_API_URL = `${API_BASE_URL}/Task`;

export const getTasks = () => axios.get(`${TASK_API_URL}/GetAllTasks`);

export const getTaskById = (id) =>
  axios.get(`${TASK_API_URL}/GetTaskById/${id}`);

export const createTask = (task) =>
  axios.post(`${TASK_API_URL}/CreateTask`, task);

export const updateTask = (id, task) =>
  axios.put(`${TASK_API_URL}/UpdateTask/${id}`, task);

export const deleteTask = (id) =>
  axios.delete(`${TASK_API_URL}/DeleteTask/${id}`);
