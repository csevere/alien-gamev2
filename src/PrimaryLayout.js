import React from 'react';
import { Route } from 'react-router-dom';
import Welcome from './Components/Welcome';
import Play from './Components/Play'; 
import Footer from './Components/Footer';
import SceneBoard from './Components/SceneBoard';  


const PrimaryLayout = () => (
    <div className="primary-layout">
      <main>
        <Route path="/" exact component={Welcome} />
        <Route path="/play" component={Play} />
        <Route path ="/scene" component = {SceneBoard}/>
        <Footer/>
      </main>
    </div>
  );

  export default PrimaryLayout; 