import style from './Dialogs.module.scss';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import React from 'react';

const Dialogs = ({ sendMsgContainer, updateNewDialogMsgContainer, state }) => {
  debugger;
  const sendMsg = e => {
    sendMsgContainer();
  };

  const updateNewDialogMsg = e => {
    const text = e.target.value;
    updateNewDialogMsgContainer(text);
  };

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
