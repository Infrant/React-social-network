import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { FormControl } from '../common/FormControls/FormControl';
import { required } from '../utils/validators/validators';
import style from '../common/FormControls/FormControl.module.scss';

const LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          type='text'
          placeholder='Login'
          component={FormControl}
          TypeField='input'
          validate={[required]}
          name={'email'}
        />
      </div>
      <div>
        <Field
          type='password'
          placeholder='Password'
          component={FormControl}
          TypeField='input'
          validate={[required]}
          name={'password'}
        />
      </div>
      <div>
        <Field type='checkbox' component={'input'} name={'rememberMe'} />
        Remember me
      </div>
      {props.error && (
        <div className={style.formControlError}>{props.error}</div>
      )}
      <div>
        <button>sign in</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = ({ login, isAuth }) => {
  const onSubmit = formData => {
    const { email, password, rememberMe } = formData;
    login(email, password, rememberMe);
  };

  if (isAuth) return <Redirect to='/profile' />;

  return (
    <>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </>
  );
};
export default Login;
