import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'e4e4830d-b9e4-4a7a-9698-235aa4feee3b',
  },
});

export const usersAPI = {
  getUsers(page = 1, pageSize = 100) {
    return instance
      .get(`/users?page=${page}&count=${pageSize}`)
      .then(response => response.data);
  },
};
