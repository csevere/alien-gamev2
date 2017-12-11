import React from 'react';
import { Route } from 'react-router-dom';
import Welcome from './Components/Welcome';
import Footer from './Components/Footer';
import SceneBoard from './Components/SceneBoard'; 
import ConversationBoard from './Components/ConversationBoard';
import LogNav from './Components/Login_Register/LogNav';  
import Game from './Components/Game/Game'; 


const PrimaryLayout = () => (
    <div className="primary-layout">
      <main>
        <Route path="/" exact component={Welcome} />
        <Route path="/login" component={LogNav} />
        <Route path ="/scene" component = {SceneBoard}/>
        <Route path ="/convo" component = {ConversationBoard}/>
        <Route path="/game" component={Game} />
        <Footer/>
      </main>
    </div>
  );

  export default PrimaryLayout; 