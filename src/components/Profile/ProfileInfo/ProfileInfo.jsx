import style from './ProfileInfo.module.scss';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileInfo = ({ profile, status, updateProfileStatus }) => {
  return (
    <>
      <div>
        {/* <img
          className={style.topBackImg}
          src='https://www.1zoom.ru/big2/582/255388-svetik.jpg'
          alt='photo'
        /> */}
      </div>
      <div>
        <div>
          <img src={profile?.photos.large} alt='' />
          <div>
            <span>{profile?.fullName}</span>
          </div>
        </div>
        <div>
          <ProfileStatus
            status={status}
            updateProfileStatus={updateProfileStatus}
          />
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
