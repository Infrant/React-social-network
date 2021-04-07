import './App.scss';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, BrowserRouter } from 'react-router-dom';

function App({ state, dispatch, store }) {
  // const { profilePage, dialogsPage } = state;
  return (
    <BrowserRouter>
      <Header />
      <div className='grid-wrapper container'>
        <Nav />
        <div className='content'>
          <Route
            path='/profile'
            render={() => (
              <Profile
                // postsData={profilePage.postsData}
                // newPostMsg={profilePage.newPostMsg}
                // dispatch={dispatch}
                store={store}
              />
            )}
          />
          <Route
            path='/dialogs'
            render={() => (
              <DialogsContainer
                // messagesData={dialogsPage.messagesData}
                // dialogsData={dialogsPage.dialogsData}
                // newDialogMsg={dialogsPage.newDialogMsg}
                // dispatch={dispatch}
                store={store}
              />
            )}
          />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
