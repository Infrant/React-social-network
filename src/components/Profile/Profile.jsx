import MyPostsContainer from './MyPosts/MyPostsContainer';
import style from './Profile.module.scss';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ store }) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer
        // postsData={postsData}
        // newPostMsg={newPostMsg}
        // dispatch={dispatch}
        store={store}
      />
    </div>
  );
};
export default Profile;
