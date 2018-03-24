import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import PrimaryLayout from './PrimaryLayout'; 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; 
import reduxThunk from 'redux-thunk';
// import reduxPromise from 'redux-promise';
import Reducers from './Reducers';

//applying middleware 
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(Reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// const store = applyMiddleware(reduxPromise)(createStore)(Reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const App = () => (
  <Provider store = {store}>
    <BrowserRouter>
      <PrimaryLayout/> 
    </BrowserRouter>
  </Provider>

)

export default App; 