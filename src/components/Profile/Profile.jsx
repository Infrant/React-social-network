import MyPostsContainer from './MyPosts/MyPostsContainer';
import style from './Profile.module.scss';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ profile, status, updateProfileStatus }) => {
  return (
    <div>
      <ProfileInfo
        profile={profile}
        status={status}
        updateProfileStatus={updateProfileStatus}
      />
      <MyPostsContainer />
    </div>
  );
};
export default Profile;
