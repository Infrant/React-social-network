const STATE_ADD_POST = 'STATE-ADD-POST';
const UPDATE_NEW_POST_MSG = 'UPDATE-NEW-POST-MSG';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

const initialState = {
  postsData: [
    { id: 1, message: 'Hi, Everybody!', likesCount: 7 },
    { id: 2, message: 'Dudes, how are u?', likesCount: 11 },
  ],
  newPostMsg: 'Каничуа',
  profile: null,
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
  }
  return state;
};

export const addPostAC = () => ({
  type: STATE_ADD_POST,
});

export const updateNewPostMsgAC = text => ({
  type: UPDATE_NEW_POST_MSG,
  text,
});

export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile });

export default profileReducer;
