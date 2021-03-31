import style from './Message.module.scss';

const Message = props => {
  const messagesEl = props.messagesData.map(message => (
    <div className={style.message} key={message.id}>
      {message.message}
    </div>
  ));
  return messagesEl;
};

export default Message;
