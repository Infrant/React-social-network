import style from './Post.module.scss';

const Post = ({ message, like }) => {
  return (
    <div className={style.post}>
      <img
        className='user-img'
        src='https://imgholder.ru/50x50/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson'
        alt='user'
      />
      <div>{message}</div>
      <span>like: {like}</span>
    </div>
  );
};

export default Post;
