import style from './Post.module.scss';

const Post = ({ message, likesCount }) => {
  return (
    <div className={style.post}>
      <img
        className={style.userImg}
        src='https://imgholder.ru/50x50/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson'
        alt='user'
      />
      <div>{message}</div>
      <span>like: {likesCount}</span>
    </div>
  );
};

export default Post;
