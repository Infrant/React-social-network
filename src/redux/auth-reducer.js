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
        ...action.data,
        isAuth: true,
      };
  }
  return state;
};

export const setUserData = (userId, login, email) => ({
  type: SET_USER_DATA,
  data: { userId, login, email },
});

export default authReducer;