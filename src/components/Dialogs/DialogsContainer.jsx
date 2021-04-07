import Dialogs from './Dialogs';
import {
  addDialogMsgAC,
  updateNewDialogMsgAC,
} from '../../redux/dialogs-reducer';

const DialogsContainer = ({ store }) => {
  const state = store.getState().dialogsPage;
  const { dispatch } = store;

  const sendMsgContainer = () => {
    dispatch(addDialogMsgAC());
  };

  const updateNewDialogMsgContainer = text => {
    dispatch(updateNewDialogMsgAC(text));
  };

  return (
    <Dialogs
      sendMsgContainer={sendMsgContainer}
      updateNewDialogMsgContainer={updateNewDialogMsgContainer}
      state={state}
    />
  );
};

export default DialogsContainer;
