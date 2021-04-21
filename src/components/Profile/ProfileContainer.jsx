import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Profile from './Profile';
import { setUserProfile } from '../../redux/profile-reducer';
import { urlApi } from '../../constants';
import { withRouter } from 'react-router';

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId
      ? this.props.match.params.userId
      : '16430';
    axios.get(`${urlApi}/profile/${userId}`).then(response => {
      this.props.setUserProfile(response.data);
    });
  }
  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = state => ({
  profile: state.profilePage.profile,
});

const WithUrlIdProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(
  WithUrlIdProfileContainer
);
