import React from 'react';
import { Route } from 'react-router-dom';
import Welcome from './Components/Welcome';
import Play from './Components/Play'; 
import Footer from './Components/Footer';
import Scene from './Components/Scene';  


const PrimaryLayout = () => (
    <div className="primary-layout">
      <main>
        <Route path="/" exact component={Welcome} />
        <Route path="/play" component={Play} />
        <Route path ="/scene" component = {Scene}/>
        <Footer/>
      </main>
    </div>
  );

  export default PrimaryLayout; 