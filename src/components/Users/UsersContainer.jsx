import * as axios from 'axios';
import { connect } from 'react-redux';
import React from 'react';
import {
  follow,
  unfollow,
  toggleFollowingProgress,
  getUsers,
} from '../../redux/users-reducer';
import Users from './Users';
import Loader from '../common/Loader';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
    // this.props.toggleIsLoading(true);
    // usersAPI
    //   .getUsers(this.props.currentPage, this.props.pageSize)
    //   .then(data => {
    //     this.props.toggleIsLoading(false);
    //     this.props.setUsers(data.items);
    //     this.props.setTotalUsersCount(data.totalCount);
    //   });
  }
  setCurrentpage = page => {
    // this.props.setCurrentPage(page);
    // this.props.toggleIsLoading(true);
    // usersAPI.getUsers(page, this.props.pageSize).then(data => {
    //   this.props.toggleIsLoading(false);
    //   this.props.setUsers(data.items);
    // });
    this.props.getUsers(page);
  };

  render() {
    return (
      <>
        {this.props.isLoading ? (
          <Loader />
        ) : (
          <Users
            users={this.props.users}
            currentPage={this.props.currentPage}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            setCurrentpage={this.setCurrentpage}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            followingProgress={this.props.followingProgress}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    isLoading: state.usersPage.isLoading,
    followingProgress: state.usersPage.followingProgress,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  toggleFollowingProgress,
  getUsers,
})(UsersContainer);

// const mapDispatchToProps = dispatch => {
//   return {
//     followContainer: userId => {
//       dispatch(followAC(userId));
//     },
//     unfollowContainer: userId => {
//       dispatch(unfollowAC(userId));
//     },
//     setUsersContainer: users => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPageContainer: page => {
//       dispatch(setCurrentPageAC(page));
//     },
//     setTotalUsersCountContainer: totalUsersCount => {
//       dispatch(setTotalUsersCountAC(totalUsersCount));
//     },
//     toggleIsLoadingContainer: isLoading => {
//       dispatch(toggleIsLoadingAC(isLoading));
//     },
//   };
// };
