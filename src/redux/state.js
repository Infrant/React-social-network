const state = {
  postsData: [
    { id: 1, message: 'Hi, Everybody!', likesCount: 7 },
    { id: 2, message: 'Dudes, how are u?', likesCount: 11 },
  ],
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
};

export const stateAddPost = postMsg => {
  const newPost = {
    id: state.postsData.length + 1,
    message: postMsg,
    likesCount: 0,
  };
  state.postsData.push(newPost);
  console.log(state.postsData);
};

export default state;
