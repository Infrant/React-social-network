// const STATE_ADD_POST = 'STATE-ADD-POST';
// const UPDATE_NEW_POST_MSG = 'UPDATE-NEW-POST-MSG';
// const UPDATE_NEW_DIALOG_MSG = 'UPDATE-NEW-DIALOG-MSG';
// const STATE_ADD_DIALOG_MSG = 'STATE-ADD-DIALOG-MSG';

import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
const store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: 'Hi, Everybody!', likesCount: 7 },
        { id: 2, message: 'Dudes, how are u?', likesCount: 11 },
      ],
      newPostMsg: 'Каничуа',
    },
    dialogsPage: {
      messagesData: [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'How are u!' },
        { id: 3, message: "I'm fine!" },
      ],
      newDialogMsg: 'Каничуа',
      dialogsData: [
        { id: 1, name: 'Jhon' },
        { id: 2, name: 'Ann' },
        { id: 3, name: 'Peter' },
        { id: 4, name: 'Michael' },
      ],
    },
  },
  _callSubscriber() {
    console.log('rerender');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    profileReducer(this._state.profilePage, action);
    dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this.getState());
    // if (action.type === 'STATE-ADD-POST') {
    //   const newPost = {
    //     id: this._state.profilePage.postsData.length + 1,
    //     message: this._state.profilePage.newPostMsg,
    //     likesCount: Math.round(Math.random() * 20),
    //   };
    //   this._state.profilePage.postsData.push(newPost);
    //   this._callSubscriber(this.getState());
    //   this._state.profilePage.newPostMsg = '';
    // } else if (action.type === 'UPDATE-NEW-POST-MSG') {
    //   this._state.profilePage.newPostMsg = action.text;
    //   this._callSubscriber(this.getState());
    // } else if (action.type === 'UPDATE-NEW-DIALOG-MSG') {
    //   this._state.dialogsPage.newDialogMsg = action.text;
    //   this._callSubscriber(this.getState());
    // } else if (action.type === 'STATE-ADD-DIALOG-MSG') {
    //   if (this._state.dialogsPage.newDialogMsg) {
    //     const newMsg = {
    //       id: this._state.dialogsPage.messagesData.length + 1,
    //       message: this._state.dialogsPage.newDialogMsg,
    //     };
    //     this._state.dialogsPage.messagesData.push(newMsg);
    //     this._callSubscriber(this.getState());
    //     this._state.dialogsPage.newDialogMsg = '';
    //   }
    // }
  },
};

// export const addPostAC = () => ({
//   type: STATE_ADD_POST,
// });

// export const updateNewPostMsgAC = text => ({
//   type: UPDATE_NEW_POST_MSG,
//   text: text,
// });

// export const updateNewDialogMsgAC = text => ({
//   type: UPDATE_NEW_DIALOG_MSG,
//   text: text,
// });

// export const addDialogMsgAC = () => ({
//   type: STATE_ADD_DIALOG_MSG,
// });

window.store = store;

export default store;
