import React from 'react';
import { Route } from 'react-router-dom';
import Welcome from './Components/Welcome';
import Play from './Components/Play'; 
import Footer from './Components/Footer';
import SceneBoard from './Components/SceneBoard'; 
import ConversationBoard from './Components/ConversationBoard';
import LogNav from './Components/Login_Register/LogNav';  


const PrimaryLayout = () => (
    <div className="primary-layout">
      <main>
        <Route path="/" exact component={Welcome} />
        <Route path="/login" component={LogNav} />
        <Route path ="/scene" component = {SceneBoard}/>
        <Route path ="/convo" component = {ConversationBoard}/>
        <Route path="/play" component={Play} />
        <Footer/>
      </main>
    </div>
  );

  export default PrimaryLayout; 