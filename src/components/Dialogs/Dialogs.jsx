import style from './Dialogs.module.scss';
import { NavLink } from 'react-router-dom';
import Nav from '../Nav/Nav';

const Dialogs = () => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <NavLink
          to='/dialogs/1'
          activeClassName={style.active}
          className={style.dialog}
        >
          <div>Jhon</div>
        </NavLink>
        <NavLink
          to='/dialogs/2'
          activeClassName={style.active}
          className={style.dialog}
        >
          <div>Ann</div>
        </NavLink>
        <NavLink
          to='/dialogs/3'
          activeClassName={style.active}
          className={style.dialog}
        >
          <div>Peter</div>
        </NavLink>
        <NavLink
          to='/dialogs/4'
          activeClassName={style.active}
          className={style.dialog}
        >
          <div>Michael</div>
        </NavLink>
      </div>
      <div className={style.messages}>
        <div className={style.message}>Hi!</div>
        <div className={style.message}>How are u!</div>
        <div className={style.message}>I'm fine!</div>
      </div>
    </div>
  );
};

export default Dialogs;
