const STATE_ADD_DIALOG_MSG = 'STATE-ADD-DIALOG-MSG';

const initialState = {
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

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATE_ADD_DIALOG_MSG:
      const newMsg = {
        id: state.messagesData.length + 1,
        message: action.newDialogMsg,
      };
      return {
        ...state,
        messagesData: [...state.messagesData, newMsg],
      };

    default:
      return state;
  }
};

export const addDialogMsg = newDialogMsg => ({
  type: STATE_ADD_DIALOG_MSG,
  newDialogMsg,
});

export default dialogsReducer;
