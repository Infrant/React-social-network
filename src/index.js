import state, { subscribe } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { stateAddPost, updateNewPostMsg } from './redux/state';
import App from './App';

const rerenderEntireTree = state => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        stateAddPost={stateAddPost}
        updateNewPostMsg={updateNewPostMsg}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

rerenderEntireTree(state);
subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
