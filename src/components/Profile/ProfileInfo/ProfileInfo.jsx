import style from './ProfileInfo.module.scss';

const ProfileInfo = () => {
  return (
    <>
      <div>
        <img
          className={style.topBackImg}
          src='https://www.1zoom.ru/big2/582/255388-svetik.jpg'
          alt='photo'
        />
      </div>
      <div>ava + desription</div>
    </>
  );
};

export default ProfileInfo;
