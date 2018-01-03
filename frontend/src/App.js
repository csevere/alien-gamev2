import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import PrimaryLayout from './PrimaryLayout'; 
import { Provider } from 'react-redux';
import { createStore } from 'redux'; 
import Reducers from './Reducers';



const App = () => (
  <Provider store = {createStore(Reducers)}>
    <BrowserRouter>
      <PrimaryLayout/> 
    </BrowserRouter>
  </Provider>

)

export default App; 