import { combineReducers } from 'redux';
import CardShuffleReducer from './CardShuffleReducer'; 
import CompanionsReducer from './CompanionsReducer'; 
import ChooseCharReducer from './ChooseCharReducer'; 
import DealNewReducer from './DealNewReducer';
import DrawCardReducer from './DrawCardReducer'; 
import DrawAttackReducer from './DrawAttackReducer'; 
import EnemyAttack1Reducer from './EnemyAttack1Reducer'; 
import EnemyShuffleReducer from './EnemyShuffleReducer'; 
import LoginReducer from './LoginReducer'; 
import MusicReducer from './MusicReducer'; 
import StorySceneReducer from './StorySceneReducer';
import SelectionStoryReducer from './SelectionStoryReducer'; 
import StoryConvoReducer from './StoryConvoReducer';
import SelectionConvoReducer from './SelectionConvoReducer'; 
import WeaponsListReducer from './WeaponsListReducer'; 
import WeaponsListReducer2 from './WeaponsList2Reducer'; 
import RegisterReducer from './RegisterReducer';

// import DealWeaponsReducer from './DealWeaponsReducer';
 
const rootReducer =  combineReducers({
    attackLibrary: EnemyAttack1Reducer,
    cardShuffle: CardShuffleReducer,
    chooseChar: ChooseCharReducer,
    companions: CompanionsReducer,
    enemysHand: DrawAttackReducer,
    enemyShuffle: EnemyShuffleReducer,
    loginReducer: LoginReducer,
    musicReducer: MusicReducer,
    newDeck: DealNewReducer, 
    playersHand: DrawCardReducer,
    registerReducer:RegisterReducer,
    storySceneLibrary: StorySceneReducer,
    selectedStoryId: SelectionStoryReducer,
    storyConvoLibrary: StoryConvoReducer,
    selectedConvoId: SelectionConvoReducer,
    weaponsLibrary: WeaponsListReducer,
    weaponsLibrary2: WeaponsListReducer2
}); 

export default rootReducer; 
