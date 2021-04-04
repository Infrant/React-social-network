import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.scss';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ postsData, newPostMsg, dispatch }) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        postsData={postsData}
        newPostMsg={newPostMsg}
        dispatch={dispatch}
      />
    </div>
  );
};
export default Profile;
