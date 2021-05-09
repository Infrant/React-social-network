import Dialogs from './Dialogs';
import { addDialogMsg } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapSateToProps = state => {
  return {
    state: state.dialogsPage,
  };
};

export default compose(
  withAuthRedirect,
  connect(mapSateToProps, { addDialogMsg })
)(Dialogs);
