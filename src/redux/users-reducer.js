import { usersAPI } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_LOADING = 'TOGGLE-IS-LOADING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE-FOLLOWING-PROGRESS';

const initialState = {
  users: [],
  currentPage: 1,
  totalUsersCount: 0,
  pageSize: 100,
  isLoading: false,
  followingProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page,
      };

    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };

    case TOGGLE_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case TOGGLE_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingProgress: action.isFetching
          ? [...state.followingProgress, action.userId]
          : state.followingProgress.filter(id => id != action.userId),
      };
  }
  return state;
};

export const followSuccess = userId => ({
  type: FOLLOW,
  userId,
});

export const unfollowSuccess = userId => ({
  type: UNFOLLOW,
  userId,
});

export const setUsers = users => ({ type: SET_USERS, users });

export const setCurrentPage = page => ({ type: SET_CURRENT_PAGE, page });

export const setTotalUsersCount = totalUsersCount => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});

export const toggleIsLoading = isLoading => ({
  type: TOGGLE_IS_LOADING,
  isLoading,
});

export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

export const getUsers = (currentPage, pageSize) => {
  return dispatch => {
    dispatch(setCurrentPage(currentPage));
    dispatch(toggleIsLoading(true));
    usersAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(toggleIsLoading(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  };
};

export const follow = userId => {
  return dispatch => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.follow(userId).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(followSuccess(userId));
      }
      dispatch(toggleFollowingProgress(false, userId));
    });
  };
};

export const unfollow = userId => {
  return dispatch => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.unfollow(userId).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
      }
      dispatch(toggleFollowingProgress(false, userId));
    });
  };
};

export default usersReducer;
