import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { Provider } from 'react-redux';

const rerenderEntireTree = state => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App
          store={store}
          state={state}
          dispatch={store.dispatch.bind(store)}
        />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

rerenderEntireTree(store.getState());
store.subscribe(() => {
  const state = store.getState();
  return rerenderEntireTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
