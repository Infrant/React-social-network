import * as axios from 'axios';
import { connect } from 'react-redux';
import React from 'react';
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  unfollowAC,
} from '../../redux/users-reducer';
import Users from './Users';

class UsersContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.setUsersContainer(response.data.items);
        this.props.setTotalUsersCountContainer(response.data.totalCount);
      });
  }
  setCurrentpage = page => {
    this.props.setCurrentPageContainer(page);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.setUsersContainer(response.data.items);
      });
  };

  render() {
    return (
      <Users
        users={this.props.users}
        currentPage={this.props.currentPage}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        setCurrentpage={this.setCurrentpage}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    followContainer: userId => {
      dispatch(followAC(userId));
    },
    unfollowContainer: userId => {
      dispatch(unfollowAC(userId));
    },
    setUsersContainer: users => {
      dispatch(setUsersAC(users));
    },
    setCurrentPageContainer: page => {
      dispatch(setCurrentPageAC(page));
    },
    setTotalUsersCountContainer: totalUsersCount => {
      dispatch(setTotalUsersCountAC(totalUsersCount));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
