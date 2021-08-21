// eslint-disable-next-line
import style from './ProfileInfo.module.scss';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileInfo = ({
  profile,
  status,
  updateProfileStatus,
  isOwner,
  onAddProfilePhoto,
}) => {
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
          <img
            src={
              profile?.photos.large ||
              'https://imgholder.ru/100x100/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson'
            }
            alt=''
          />
          {isOwner && <input type='file' onChange={onAddProfilePhoto} />}
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
