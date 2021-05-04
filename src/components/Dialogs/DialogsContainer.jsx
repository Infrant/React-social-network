import Dialogs from './Dialogs';
import {
  addDialogMsgAC,
  updateNewDialogMsgAC,
} from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

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

export default compose(
  withAuthRedirect,
  connect(mapSateToProps, mapDispatchToProps)
)(Dialogs);
