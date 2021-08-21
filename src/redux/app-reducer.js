import { getAuthUserData } from './auth-reducer';

const SET_INITIALIZED = 'SET_INITIALIZED';

const initialState = {
  isInitialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        isInitialized: true,
      };

    default:
      return state;
  }
};

export const setInitialized = () => ({
  type: SET_INITIALIZED,
});

export const initializeApp = () => async dispatch => {
  await dispatch(getAuthUserData());
  dispatch(setInitialized());
};

export default appReducer;
