import style from './Dialog.module.scss';
import { NavLink } from 'react-router-dom';

const Dialog = props => {
  const path = '/dialogs/';

  const dialogsEl = props.dialogsData.map(dialog => (
    <NavLink
      to={`${path}${dialog.id}`}
      activeClassName={style.active}
      className={style.dialog}
      key={dialog.id}
    >
      <div>{dialog.name}</div>
    </NavLink>
  ));

  return dialogsEl;
};

export default Dialog;
