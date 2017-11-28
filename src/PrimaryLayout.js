import React from 'react';
import { Route } from 'react-router-dom';
import Welcome from './Components/Welcome';
import Play from './Components/Play'; 


const PrimaryLayout = () => (
    <div className="primary-layout">
      <main>
        <Route path="/" exact component={Welcome} />
        <Route path="/play" component={Play} />
      </main>
    </div>
  );

  export default PrimaryLayout; 