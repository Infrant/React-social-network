import './App.scss';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, BrowserRouter } from 'react-router-dom';
// { postsData, messagesData, dialogsData }
function App({ state, stateAddPost, updateNewPostMsg }) {
  const { profilePage, dialogsPage } = state;
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
                postsData={profilePage.postsData}
                stateAddPost={stateAddPost}
                newPostMsg={profilePage.newPostMsg}
                updateNewPostMsg={updateNewPostMsg}
              />
            )}
          />
          <Route
            path='/dialogs'
            render={() => (
              <Dialogs
                messagesData={dialogsPage.messagesData}
                dialogsData={dialogsPage.dialogsData}
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
