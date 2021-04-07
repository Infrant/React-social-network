import MyPosts from './MyPosts';
import { addPostAC, updateNewPostMsgAC } from '../../../redux/profile-reducer';

const MyPostsContainer = ({ store }) => {
  const { dispatch } = store;
  const state = store.getState().profilePage;

  const addPostContainer = () => {
    dispatch(addPostAC());
  };

  const postChangeHandlerContainer = text => {
    dispatch(updateNewPostMsgAC(text));
  };

  return (
    <MyPosts
      addPostContainer={addPostContainer}
      postChangeHandlerContainer={postChangeHandlerContainer}
      state={state}
    />
  );
};

export default MyPostsContainer;
