import { NavLink } from 'react-router-dom';
import style from './Header.module.scss';

const Header = ({ isAuth, login }) => {
  return (
    <header className={style.header}>
      <div className={style.headerWrapper}>
        <a href='https://ru.reactjs.org/' target='blanc' className={style.logo}>
          <i className={`fab fa-react ${style.fontawesome}`}></i>
        </a>
        <div className={style.login}>
          {isAuth ? (
            <NavLink to={'/profile'}>{login}</NavLink>
          ) : (
            <NavLink to={'/login'}>login</NavLink>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
