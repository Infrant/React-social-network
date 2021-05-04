import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUserProfile(this.props.match.params.userId);
  }
  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = state => ({
  profile: state.profilePage.profile,
});

const AuthRedirectComponent = withAuthRedirect(ProfileContainer);
const WithUrlIdProfileContainer = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, { getUserProfile })(
  WithUrlIdProfileContainer
);
