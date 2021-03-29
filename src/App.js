import './App.scss';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <>
      <Header />
      <div className='grid-wrapper container'>
        <Nav />
        <Profile />
      </div>
    </>
  );
}

export default App;
