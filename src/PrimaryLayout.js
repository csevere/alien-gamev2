import React from 'react';
import { Route } from 'react-router-dom';
import Welcome from './Components/Welcome';
import Play from './Components/Play'; 
import Footer from './Components/Footer';
import SceneBoard from './Components/SceneBoard'; 
import ConversationBoard from './Components/ConversationBoard';  


const PrimaryLayout = () => (
    <div className="primary-layout">
      <main>
        <Route path="/" exact component={Welcome} />
        <Route path="/play" component={Play} />
        <Route path ="/scene" component = {SceneBoard}/>
        <Route path ="/convo" component = {ConversationBoard}/>
        <Footer/>
      </main>
    </div>
  );

  export default PrimaryLayout; 