import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.scss';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ postsData, stateAddPost, newPostMsg, updateNewPostMsg }) => {
  // const postsData = [
  //   { id: 1, message: 'Hi, Everybody!', likesCount: 7 },
  //   { id: 2, message: 'Dudes, how are u?', likesCount: 11 },
  // ];

  return (
    <div>
      <ProfileInfo />
      <MyPosts
        postsData={postsData}
        stateAddPost={stateAddPost}
        newPostMsg={newPostMsg}
        updateNewPostMsg={updateNewPostMsg}
      />
    </div>
  );
};
export default Profile;
