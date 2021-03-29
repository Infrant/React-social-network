import { NavLink } from 'react-router-dom';
import style from './Nav.module.scss';

const Nav = () => {
  return (
    <nav className={style.nav}>
      <NavLink
        to='/profile'
        className={style.link}
        activeClassName={style.active}
      >
        <div>
          <i className='fas fa-user-circle'></i> Profile
        </div>
      </NavLink>
      <NavLink
        to='/dialogs'
        className={style.link}
        activeClassName={style.active}
      >
        <div>
          <i className='fas fa-comment'></i> Messages
        </div>
      </NavLink>
      <NavLink to='/news' className={style.link} activeClassName={style.active}>
        <div>
          <i className='fas fa-newspaper'></i> News
        </div>
      </NavLink>

      <NavLink
        to='/music'
        className={style.link}
        activeClassName={style.active}
      >
        <div>
          <i className='fas fa-music'></i> Music
        </div>
      </NavLink>
      <NavLink
        to='/settings'
        className={style.link}
        activeClassName={style.active}
      >
        <div>
          <i className='fas fa-cog'></i> Settings
        </div>
      </NavLink>
    </nav>
  );
};
export default Nav;
