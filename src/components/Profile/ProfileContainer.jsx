import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {
  getUserProfile,
  getProfileStatus,
  updateProfileStatus,
} from '../../redux/profile-reducer';
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId =
      this.props.match.params.userId || this.props.authorizedUserId;
    if (!userId) {
      this.props.history.push('/login');
    }
    this.props.getUserProfile(userId);
    this.props.getProfileStatus(userId);
  }
  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = state => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
});

export default compose(
  withAuthRedirect,
  withRouter,
  connect(mapStateToProps, {
    getUserProfile,
    getProfileStatus,
    updateProfileStatus,
  })
)(ProfileContainer);
