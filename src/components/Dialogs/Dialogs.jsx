import style from './Dialogs.module.scss';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormControl } from '../common/FormControls/FormControl';
import { maxLength, required } from '../utils/validators/validators';

const maxLength50 = maxLength(50);

let DialogsForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        component={FormControl}
        TypeField='textarea'
        name='dialogsFormTextMsg'
        validate={[required, maxLength50]}
      />
      <div>
        <button>send message</button>
      </div>
    </form>
  );
};
DialogsForm = reduxForm({ form: 'dialogsForm' })(DialogsForm);

const Dialogs = ({ addDialogMsg, state }) => {
  const onSubmit = formData => {
    addDialogMsg(formData.dialogsFormTextMsg);
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <Dialog dialogsData={state.dialogsData} />
      </div>
      <div className={style.messages}>
        <Message messagesData={state.messagesData} />
        <DialogsForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default Dialogs;
