import MyPosts from './MyPosts';
import { addPostAC, updateNewPostMsgAC } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';

// const MyPostsContainer = ({ store }) => {
//   const { dispatch } = store;
//   const state = store.getState().profilePage;

//   const addPostContainer = () => {
//     dispatch(addPostAC());
//   };

//   const postChangeHandlerContainer = text => {
//     dispatch(updateNewPostMsgAC(text));
//   };

//   return (
//     <MyPosts
//       addPostContainer={addPostContainer}
//       postChangeHandlerContainer={postChangeHandlerContainer}
//       state={state}
//     />
//   );
// };

const mapStateToProps = state => {
  return {
    state: state.profilePage,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPostContainer: () => {
      dispatch(addPostAC());
    },
    postChangeHandlerContainer: text => {
      dispatch(updateNewPostMsgAC(text));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
