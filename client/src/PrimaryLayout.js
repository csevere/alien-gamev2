import React from 'react';
import { Route } from 'react-router-dom';
import BattleCraftMap from './Components/BattleCraftMap';
import ChooseCharacter from './Components/ChooseCharacter'; 
import ConversationBoard from './Components/ConversationBoard';
import Footer from './Components/Footer';
import FooterPage from './Components/FooterPage'; 
import Game from './Components/Game/Game'; 
import SceneBoard from './Components/SceneBoard';  
import Welcome from './Components/Welcome';








const PrimaryLayout = () => (
    <div className="primary-layout">
      <main>
        <Route path="/" exact component={Welcome} />
        <Route path="/choose" component={ChooseCharacter} />
        <Route path ="/scene" component = {SceneBoard}/>
        <Route path ="/convo" component = {ConversationBoard}/>
        <Route path="/map" component={BattleCraftMap} />
        <Route path="/game" component={Game} />
        <Route path="/links" component={FooterPage} />
        
        <Footer/>
      </main>
    </div>
  );

  export default PrimaryLayout; 