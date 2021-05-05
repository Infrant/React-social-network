import { profileAPI, usersAPI } from '../api/api';

const STATE_ADD_POST = 'STATE-ADD-POST';
const UPDATE_NEW_POST_MSG = 'UPDATE-NEW-POST-MSG';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';

const initialState = {
  postsData: [
    { id: 1, message: 'Hi, Everybody!', likesCount: 7 },
    { id: 2, message: 'Dudes, how are u?', likesCount: 11 },
  ],
  newPostMsg: 'Каничуа',
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATE_ADD_POST:
      if (state.newPostMsg) {
        const newPost = {
          id: state.postsData.length + 1,
          message: state.newPostMsg,
          likesCount: Math.round(Math.random() * 20),
        };
        return {
          ...state,
          postsData: [...state.postsData, newPost],
          newPostMsg: '',
        };
      }

    case UPDATE_NEW_POST_MSG:
      return {
        ...state,
        newPostMsg: action.text,
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    case SET_PROFILE_STATUS:
      return {
        ...state,
        status: action.status,
      };

    default:
      return state;
  }
};

export const setProfileStatus = status => ({
  type: SET_PROFILE_STATUS,
  status,
});

export const addPostAC = () => ({
  type: STATE_ADD_POST,
});

export const updateNewPostMsgAC = text => ({
  type: UPDATE_NEW_POST_MSG,
  text,
});

export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile });

export const getUserProfile = paramsUserId => {
  return dispatch => {
    usersAPI.getProfile(paramsUserId).then(response => {
      dispatch(setUserProfile(response.data));
    });
  };
};

export const getProfileStatus = userId => {
  return dispatch => {
    profileAPI.getStatus(userId).then(response => {
      dispatch(setProfileStatus(response.data));
    });
  };
};

export const updateProfileStatus = status => {
  return dispatch => {
    profileAPI.updateStatus(status).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setProfileStatus(status));
      }
    });
  };
};

export default profileReducer;
