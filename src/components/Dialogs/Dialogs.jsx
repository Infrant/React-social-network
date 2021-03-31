import style from './Dialogs.module.scss';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import React from 'react';

const Dialogs = ({ messagesData, dialogsData }) => {
  const msgText = React.createRef();

  const sendMsg = () => {
    alert(msgText.current.value);
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <Dialog dialogsData={dialogsData} />
      </div>
      <div className={style.messages}>
        <Message messagesData={messagesData} />
        <div>
          <textarea ref={msgText} />
        </div>
        <div>
          <button onClick={sendMsg}>send message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
