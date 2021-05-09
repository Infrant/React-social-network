import './App.scss';
import { useEffect } from 'react';
import Nav from './components/Nav/Nav';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, BrowserRouter } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Loader from './components/common/Loader/Loader';

const App = props => {
  useEffect(() => props.initializeApp(), []);
  if (!props.isInitialized) return <Loader />;
  return (
    <BrowserRouter>
      <HeaderContainer />
      <div className='grid-wrapper container'>
        <Nav />
        <div className='content'>
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
          <Route path='/login' render={() => <LoginContainer />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

const mapStateToProps = state => ({
  isInitialized: state.app.isInitialized,
});

export default connect(mapStateToProps, { initializeApp })(App);
