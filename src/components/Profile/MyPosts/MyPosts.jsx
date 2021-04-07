import React from 'react';
import style from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = ({ addPostContainer, postChangeHandlerContainer, state }) => {
  const addPost = e => {
    e.preventDefault();
    addPostContainer();
  };

  const postChangeHandler = e => {
    const text = e.target.value;
    postChangeHandlerContainer(text);
  };

  return (
    <div>
      <form className={style.sendMsgForm}>
        <h3>My posts</h3>
        <div>
          <textarea
            cols='30'
            rows='3'
            value={state.newPostMsg}
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
        <Post postsData={state.postsData} />
      </div>
    </div>
  );
};

export default MyPosts;
