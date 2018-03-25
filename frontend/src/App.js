import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import PrimaryLayout from './PrimaryLayout'; 


// const store = applyMiddleware(reduxPromise)(createStore)(Reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const App = () => (
  <BrowserRouter>
    <PrimaryLayout/> 
  </BrowserRouter>
)
export default App; 