import style from './Header.module.scss';

const Header = () => {
  return (
    <header className={style.header}>
      <a href='https://ru.reactjs.org/' target='blanc' className={style.logo}>
        <i className={`fab fa-react ${style.fontawesome}`}></i>
      </a>
    </header>
  );
};
export default Header;
