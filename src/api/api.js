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
    return instance.post(`follow/${userId}`).then(response => response.data);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`).then(response => response.data);
  },
  getProfile(userId) {
    console.warn('Obsolete method. Use profileAPI');
    return profileAPI.getProfile(userId);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then(response => response.data);
  },
  getStatus(userId) {
    return instance
      .get(`profile/status/${userId}`)
      .then(response => response.data);
  },
  updateStatus(status) {
    return instance
      .put(`profile/status`, { status })
      .then(response => response.data);
  },
  async savePhoto(profilePhoto) {
    const formData = new FormData();
    formData.append('image', profilePhoto);
    const response = await instance.put('profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },
};

export const authAPI = {
  auth() {
    return instance.get('auth/me').then(response => response.data);
  },
  login(email, password, rememberMe = false) {
    return instance
      .post('/auth/login', { email, password, rememberMe })
      .then(response => response.data);
  },
  logout() {
    return instance.delete('/auth/login').then(response => response.data);
  },
};
