import style from './Dialogs.module.scss';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import React from 'react';
import { Redirect } from 'react-router';

const Dialogs = ({
  sendMsgContainer,
  updateNewDialogMsgContainer,
  state,
  isAuth,
}) => {
  const sendMsg = () => {
    sendMsgContainer();
  };

  const updateNewDialogMsg = e => {
    const text = e.target.value;
    updateNewDialogMsgContainer(text);
  };

  if (!isAuth) return <Redirect to='/login' />;

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <Dialog dialogsData={state.dialogsData} />
      </div>
      <div className={style.messages}>
        <Message messagesData={state.messagesData} />
        <div>
          <textarea onChange={updateNewDialogMsg} value={state.newDialogMsg} />
        </div>
        <div>
          <button onClick={sendMsg}>send message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
