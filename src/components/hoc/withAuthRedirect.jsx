import { connect } from 'react-redux';
import { Redirect } from 'react-router';

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
});

export const withAuthRedirect = Component => {
  const AuthRedirectComponent = props => {
    if (!props.isAuth) return <Redirect to='/login' />;
    return <Component {...props} />;
  };

  return connect(mapStateToProps)(AuthRedirectComponent);
};
