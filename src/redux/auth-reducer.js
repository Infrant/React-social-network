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

export const getAuthUserData = () => async dispatch => {
  const response = await authAPI.auth();
  if (response.resultCode === 0) {
    const { id, login, email } = response.data;
    dispatch(setUserData(id, login, email, true));
  }
};

export const login = (email, password, rememberMe) => async dispatch => {
  const response = await authAPI.login(email, password, rememberMe);
  if (response.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    const error = response.messages[0] || 'some error';
    dispatch(stopSubmit('login', { _error: error }));
  }
};

export const logout = () => async dispatch => {
  const response = await authAPI.logout();
  if (response.resultCode === 0) {
    dispatch(setUserData(null, null, null, false));
  }
};

export default authReducer;
