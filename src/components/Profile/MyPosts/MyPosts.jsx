import style from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea name='' id='' cols='30' rows='3'></textarea>
        <button>Add post</button>
      </div>
      <div className={style.posts}>
        <Post message='Hi, Everybody!' like='23' />
        <Post message='Dudes, how are u?' like='11' />
      </div>
    </div>
  );
};

export default MyPosts;
