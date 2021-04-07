const UPDATE_NEW_DIALOG_MSG = 'UPDATE-NEW-DIALOG-MSG';
const STATE_ADD_DIALOG_MSG = 'STATE-ADD-DIALOG-MSG';

const initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_DIALOG_MSG:
      state.newDialogMsg = action.text;
      break;

    case STATE_ADD_DIALOG_MSG:
      if (state.newDialogMsg) {
        const newMsg = {
          id: state.messagesData.length + 1,
          message: state.newDialogMsg,
        };
        state.messagesData.push(newMsg);
        state.newDialogMsg = '';
      }
      break;
  }
  return state;
};

export const updateNewDialogMsgAC = text => ({
  type: UPDATE_NEW_DIALOG_MSG,
  text: text,
});

export const addDialogMsgAC = () => ({
  type: STATE_ADD_DIALOG_MSG,
});

export default dialogsReducer;
