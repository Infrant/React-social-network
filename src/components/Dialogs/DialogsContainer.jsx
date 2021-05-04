import Dialogs from './Dialogs';
import {
  addDialogMsgAC,
  updateNewDialogMsgAC,
} from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';

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

const AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(
  mapSateToProps,
  mapDispatchToProps
)(AuthRedirectComponent);

export default DialogsContainer;
