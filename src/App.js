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
function App({ state, stateAddPost }) {
  const { postsData, messagesData, dialogsData } = state;
  return (
    <BrowserRouter>
      <Header />
      <div className='grid-wrapper container'>
        <Nav />
        <div className='content'>
          <Route
            path='/profile'
            render={() => (
              <Profile postsData={postsData} stateAddPost={stateAddPost} />
            )}
          />
          <Route
            path='/dialogs'
            render={() => (
              <Dialogs messagesData={messagesData} dialogsData={dialogsData} />
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
