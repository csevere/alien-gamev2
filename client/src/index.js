import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; 
import reduxThunk from 'redux-thunk';
// import reduxPromise from 'redux-promise';
import Reducers from './Reducers';

//applying middleware 
const store = applyMiddleware(reduxThunk)(createStore)(Reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <Provider store = {store}>
   <App />
  </Provider>,
document.getElementById('root'));


