import axiosInstance from './axiosInstance';

const TASK_API_URL = '/Task';

export const getTasks = () => axiosInstance.get(`${TASK_API_URL}/GetAllTasks`);
export const getTaskById = (id) => axiosInstance.get(`${TASK_API_URL}/GetTaskById/${id}`);
export const createTask = (task) => axiosInstance.post(`${TASK_API_URL}/CreateTask`, task);
export const updateTask = (id, task) => axiosInstance.put(`${TASK_API_URL}/UpdateTask/${id}`, task);
export const deleteTask = (id) => axiosInstance.delete(`${TASK_API_URL}/DeleteTask/${id}`);
