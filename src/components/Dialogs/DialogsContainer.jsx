import Dialogs from './Dialogs';
import {
  addDialogMsgAC,
  updateNewDialogMsgAC,
} from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import store from '../../redux/redux-store';

// const DialogsContainer = ({ store }) => {
//   const state = store.getState().dialogsPage;
//   const { dispatch } = store;

//   const sendMsgContainer = () => {
//     dispatch(addDialogMsgAC());
//   };

//   const updateNewDialogMsgContainer = text => {
//     dispatch(updateNewDialogMsgAC(text));
//   };

//   return (
//     <Dialogs
//       sendMsgContainer={sendMsgContainer}
//       updateNewDialogMsgContainer={updateNewDialogMsgContainer}
//       state={state}
//     />
//   );
// };

const mapSateToProps = state => {
  return {
    state: state.dialogsPage,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendMsgContainer: () => {
      dispatch(addDialogMsgAC());
    },
    updateNewDialogMsgContainer: text => {
      dispatch(updateNewDialogMsgAC(text));
    },
  };
};

const DialogsContainer = connect(mapSateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
