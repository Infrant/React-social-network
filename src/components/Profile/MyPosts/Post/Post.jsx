import style from './Post.module.scss';

const Post = ({ postsData }) => {
  const postsEl = postsData.map(post => (
    <div className={style.post} key={post.id}>
      <img
        className={style.userImg}
        src='https://imgholder.ru/50x50/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson'
        alt='user'
      />
      <div>{post.message}</div>
      <span>like: {post.likesCount}</span>
    </div>
  ));

  return postsEl;
};

export default Post;
