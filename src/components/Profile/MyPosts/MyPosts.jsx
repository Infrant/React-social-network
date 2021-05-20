import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormControl } from '../../common/FormControls/FormControl';
import { maxLength, required } from '../../utils/validators/validators';
import style from './MyPosts.module.scss';
import Post from './Post/Post';

const maxLength10 = maxLength(10);

const MyPostsForm = props => {
  const { handleSubmit } = props;
  return (
    <form className={style.sendMsgForm} onSubmit={handleSubmit}>
      <h3>My posts</h3>
      <div>
        <Field
          cols='30'
          rows='3'
          component={FormControl}
          name={'newPostText'}
          validate={[required, maxLength10]}
          TypeField='textarea'
        />
      </div>
      <div>
        <button className={style.btn}>Add post</button>
      </div>
    </form>
  );
};

const MyPostsReduxForm = reduxForm({ form: 'myPosts' })(MyPostsForm);

const MyPosts = ({ addPost, postsData }) => {
  console.log('render');
  const onSubmit = formData => {
    addPost(formData.newPostText);
  };

  return (
    <div>
      <MyPostsReduxForm onSubmit={onSubmit} />
      <div className={style.posts}>
        <Post postsData={postsData} />
      </div>
    </div>
  );
};

export default MyPosts;
