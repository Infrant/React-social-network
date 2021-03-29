import style from './Nav.module.scss';

const Nav = () => {
  return (
    <nav className={style.nav}>
      <a href='#' className={style.link}>
        <div>
          <i className='fas fa-user-circle'></i> Profile
        </div>
      </a>
      <a href='#' className={style.link}>
        <div>
          <i className='fas fa-comment'></i> Messages
        </div>
      </a>
      <a href='#' className={style.link}>
        <div>
          <i className='fas fa-newspaper'></i> News
        </div>
      </a>
      <a href='#' className={style.link}>
        <div>
          <i className='fas fa-music'></i> Music
        </div>
      </a>
      <a href='#' className={style.link}>
        <div>
          <i className='fas fa-cog'></i> Settings
        </div>
      </a>
    </nav>
  );
};
export default Nav;
