import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.scss';

const Profile = () => {
  return (
    <div className={style.content}>
      <div>
        <img
          className={style.topBackImg}
          src='https://www.1zoom.ru/big2/582/255388-svetik.jpg'
          alt='photo'
        />
      </div>
      <div>ava + desription</div>
      <MyPosts />
    </div>
  );
};
export default Profile;
