import { profileAPI, usersAPI } from '../api/api';

const STATE_ADD_POST = 'profile/STATE-ADD-POST';
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_PROFILE_STATUS = 'profile/SET_PROFILE_STATUS';
const SET_PROFILE_PHOTO = 'profile/SET_PROFILE_PHOTO';

const initialState = {
  postsData: [
    { id: 1, message: 'Hi, Everybody!', likesCount: 7 },
    { id: 2, message: 'Dudes, how are u?', likesCount: 11 },
  ],
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATE_ADD_POST:
      const newPost = {
        id: state.postsData.length + 1,
        message: action.newPostText,
        likesCount: Math.round(Math.random() * 20),
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
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

    case SET_PROFILE_PHOTO:
      debugger;
      return {
        ...state,
        profile: {
          ...state.profile,
          photos: action.photos,
        },
      };

    default:
      return state;
  }
};

export const setProfileStatus = status => ({
  type: SET_PROFILE_STATUS,
  status,
});

export const addPost = newPostText => ({
  type: STATE_ADD_POST,
  newPostText,
});

export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile });

export const getUserProfile = paramsUserId => async dispatch => {
  const response = await usersAPI.getProfile(paramsUserId);
  dispatch(setUserProfile(response));
};

export const getProfileStatus = userId => async dispatch => {
  const response = await profileAPI.getStatus(userId);
  dispatch(setProfileStatus(response));
};

export const updateProfileStatus = status => async dispatch => {
  const response = await profileAPI.updateStatus(status);
  if (response.resultCode === 0) {
    dispatch(setProfileStatus(status));
  }
};

const savePhotoSuccess = photos => ({
  type: SET_PROFILE_PHOTO,
  photos,
});

export const updateProfilePhoto = profilePhoto => async dispatch => {
  const response = await profileAPI.savePhoto(profilePhoto);
  if (response.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.photos));
  }
};

export default profileReducer;
