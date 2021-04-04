import style from './Dialogs.module.scss';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import React from 'react';
import {
  addDialogMsgAC,
  updateNewDialogMsgAC,
} from '../../redux/dialogs-reducer';

const Dialogs = ({ messagesData, dialogsData, newDialogMsg, dispatch }) => {
  // const msgText = React.createRef();

  const sendMsg = e => {
    dispatch(addDialogMsgAC());
  };

  const updateNewDialogMsg = e => {
    const text = e.target.value;
    dispatch(updateNewDialogMsgAC(text));
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <Dialog dialogsData={dialogsData} />
      </div>
      <div className={style.messages}>
        <Message messagesData={messagesData} />
        <div>
          <textarea
            onChange={updateNewDialogMsg}
            // ref={msgText}
            value={newDialogMsg}
          />
        </div>
        <div>
          <button onClick={sendMsg}>send message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
