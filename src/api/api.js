import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '71365c8f-08ad-49e5-b459-08e05f93b35e',
  },
});

export const usersAPI = {
  getUsers(page = 1, pageSize = 100) {
    return instance
      .get(`users?page=${page}&count=${pageSize}`)
      .then(response => response.data);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
};

export const authAPI = {
  auth() {
    return instance.get('auth/me');
  },
};
