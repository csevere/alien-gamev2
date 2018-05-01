import React from 'react';
import { Route } from 'react-router-dom';
import asyncComponent from './AsyncComponent';

const BattleCraftMap = asyncComponent(()=> 
  import ('./Components/BattleCraftMap').then(module => module.default)
)

const ChooseCharacter  = asyncComponent(()=> 
  import ('./Components/ChooseCharacter').then(module => module.default)
)

const ConversationBoard  = asyncComponent(()=> 
  import ('./Components/ConversationBoard').then(module => module.default)
)

const Footer = asyncComponent(()=> 
  import ('./Components/Footer').then(module => module.default)
)

const FooterPage  = asyncComponent(()=> 
  import ('./Components/FooterPage').then(module => module.default)
)

const Game  = asyncComponent(()=> 
  import ('./Components/Game/Game').then(module => module.default)
)

const ScoreBoard  = asyncComponent(()=> 
  import ('./Components/ScoreBoard').then(module => module.default)
)

const SceneBoard  = asyncComponent(()=> 
  import ('./Components/SceneBoard').then(module => module.default)
)

const Welcome  = asyncComponent(()=> 
  import ('./Components/Welcome').then(module => module.default)
)



const PrimaryLayout = () => (
    <div className="primary-layout">
      <main>
        <Route path="/" exact component={Welcome} />
        <Route path="/choose" component={ChooseCharacter} />
        <Route path ="/scene" component = {SceneBoard}/>
        <Route path ="/convo" component = {ConversationBoard}/>
        <Route path="/map" component={BattleCraftMap} />
        <Route path="/game" component={Game} />
        <Route path ="/board" component = {ScoreBoard}/>
        <Route path="/links" component={FooterPage} />
        <Footer/>
      </main>
    </div>
  );

  export default PrimaryLayout; 