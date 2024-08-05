import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux'
import {asyncMiddleware} from './middleware/async';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { reducer } from './features/todos';
import {applyMiddleware} from 'redux';

const store = configureStore({reducer: reducer, 
  middleware: [asyncMiddleware]
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
