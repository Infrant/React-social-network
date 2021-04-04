const UPDATE_NEW_DIALOG_MSG = 'UPDATE-NEW-DIALOG-MSG';
const STATE_ADD_DIALOG_MSG = 'STATE-ADD-DIALOG-MSG';

const dialogsReducer = (state, action) => {
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
