import axios from 'axios';

// Create an Axios instance with default configurations
const api = axios.create({
  baseURL: 'http://localhost:5000', // Base URL of your Express server
});

export default api;

