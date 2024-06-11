// Import necessary modules and utilities
import axios from "axios";
import { LocalStorage } from "../utils";

// Create an Axios instance for API requests
const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
  withCredentials: true,
  timeout: 120000,
});

// Add an interceptor to set authorization header with user token before requests
apiClient.interceptors.request.use(
  function (config) {
    // Retrieve user token from local storage
    const token = LocalStorage.get("token");
    // Set authorization header with bearer token
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// API functions for different actions
const loginUser = (data) => {
  return apiClient.post("/users/login", data);
};

const registerUser = (data) => {
  return apiClient.post("/users/register", data);
};

const logoutUser = () => {
  return apiClient.get("/users/logout");
};

const getAllVideos = (page=1,limit=10) => {
  return apiClient.get(`/videos?page=${page}&limit=${limit}&sortType=desc`);
};
const getSingleVideo = (videoId) => {
  return apiClient.get(`/videos/${videoId}`);
};
const getAllComments = (videoId) => {
  return apiClient.get(`/comments/${videoId}`);
};
const addComment = (videoId, data) => {
  return apiClient.post(`/comments/${videoId}`, data);
};
const getAllNotifications = () => {
  return apiClient.get(`/notifications`);
};
const getLikeCountOnVideo = (videoId) => {
  return apiClient.get(`/likes/video/${videoId}`);
};
const toggleVideoReaction = (videoId, name) => {
  return apiClient.post(`/likes/toggle/v/${videoId}`, { reaction: name});
};

// Export all the API functions
export {
  loginUser,
  logoutUser,
  registerUser,
  getAllVideos,
  getSingleVideo,
  getAllComments,
  addComment,
  getAllNotifications,
  getLikeCountOnVideo,
  toggleVideoReaction
};