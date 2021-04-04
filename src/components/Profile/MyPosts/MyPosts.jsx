import React from 'react';
import { addPostAC, updateNewPostMsgAC } from '../../../redux/profile-reducer';
import style from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = ({ postsData, newPostMsg, dispatch }) => {
  // const postsEl = postsData.map(post => (
  //   <Post message={post.message} likesCount={post.likesCount} id={post.id} />
  // ));

  // const postText = React.createRef();

  const addPost = e => {
    e.preventDefault();
    dispatch(addPostAC());
    // stateAddPost();
  };

  const postChangeHandler = e => {
    const text = e.target.value;
    dispatch(updateNewPostMsgAC(text));
    // updateNewPostMsg(text);
  };

  return (
    <div>
      <form className={style.sendMsgForm}>
        <h3>My posts</h3>
        <div>
          <textarea
            cols='30'
            rows='3'
            // ref={postText}
            value={newPostMsg}
            onChange={postChangeHandler}
          ></textarea>
        </div>
        <div>
          <button className={style.btn} onClick={addPost}>
            Add post
          </button>
        </div>
      </form>
      <div className={style.posts}>
        <Post postsData={postsData} />
      </div>
    </div>
  );
};

export default MyPosts;
