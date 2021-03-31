import React from 'react';
import style from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = ({ postsData, stateAddPost }) => {
  const postsEl = postsData.map(post => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

  const postText = React.createRef();

  const addPost = event => {
    event.preventDefault();
    stateAddPost(postText.current.value);
    debugger;
  };

  return (
    <div>
      <form className={style.sendMsgForm}>
        <h3>My posts</h3>
        <div>
          <textarea name='' id='' cols='30' rows='3' ref={postText}></textarea>
        </div>
        <div>
          <button className={style.btn} onClick={addPost}>
            Add post
          </button>
        </div>
      </form>
      <div className={style.posts}>{postsEl}</div>
    </div>
  );
};

export default MyPosts;
