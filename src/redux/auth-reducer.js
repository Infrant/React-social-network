import { stopSubmit } from 'redux-form';
import { authAPI } from '../api/api';

const SET_USER_DATA = 'SET-USER-DATA';

const initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export const setUserData = (userId, login, email, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, login, email, isAuth },
});

export const getAuthUserData = () => {
  return dispatch => {
    return authAPI.auth().then(response => {
      if (response.data.resultCode === 0) {
        const { id, login, email } = response.data.data;
        dispatch(setUserData(id, login, email, true));
      }
    });
  };
};

export const login = (email, password, rememberMe) => {
  return dispatch => {
    authAPI.login(email, password, rememberMe).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
      } else {
        const error = response.data.messages[0] || 'some error';
        dispatch(stopSubmit('login', { _error: error }));
      }
    });
  };
};

export const logout = () => {
  return dispatch => {
    authAPI.logout().then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
      }
    });
  };
};

export default authReducer;
