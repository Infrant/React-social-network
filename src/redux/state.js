let rerenderEntireTree = () => {
  console.log('rerender');
};

const state = {
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
    dialogsData: [
      { id: 1, name: 'Jhon' },
      { id: 2, name: 'Ann' },
      { id: 3, name: 'Peter' },
      { id: 4, name: 'Michael' },
    ],
  },
};

export const stateAddPost = () => {
  const newPost = {
    id: state.profilePage.postsData.length + 1,
    message: state.profilePage.newPostMsg,
    likesCount: 0,
  };
  state.profilePage.postsData.push(newPost);
  rerenderEntireTree(state);
  state.profilePage.newPostMsg = '';
};

export const updateNewPostMsg = text => {
  state.profilePage.newPostMsg = text;
  rerenderEntireTree(state);
};

export const subscribe = observer => {
  rerenderEntireTree = observer;
};

window.state = state;

export default state;
