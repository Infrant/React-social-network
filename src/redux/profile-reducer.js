const STATE_ADD_POST = 'STATE-ADD-POST';
const UPDATE_NEW_POST_MSG = 'UPDATE-NEW-POST-MSG';

const initialState = {
  postsData: [
    { id: 1, message: 'Hi, Everybody!', likesCount: 7 },
    { id: 2, message: 'Dudes, how are u?', likesCount: 11 },
  ],
  newPostMsg: 'Каничуа',
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
        state.postsData.push(newPost);
        state.newPostMsg = '';
      }
      break;

    case UPDATE_NEW_POST_MSG:
      state.newPostMsg = action.text;
      break;
  }
  return state;
};

export const addPostAC = () => ({
  type: STATE_ADD_POST,
});

export const updateNewPostMsgAC = text => ({
  type: UPDATE_NEW_POST_MSG,
  text: text,
});

export default profileReducer;
