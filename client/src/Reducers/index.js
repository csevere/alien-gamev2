import { combineReducers } from 'redux';
import CardShuffleReducer from './CardShuffleReducer'; 
import CompanionsReducer from './CompanionsReducer'; 
import ChooseCharReducer from './ChooseCharReducer'; 
import DrawCardReducer from './DrawCardReducer'; 
import DrawAttackReducer from './DrawAttackReducer'; 
import EnemyAttack1Reducer from './EnemyAttack1Reducer'; 
import EnemyShuffleReducer from './EnemyShuffleReducer'; 
import LoginReducer from './LoginReducer'; 
import StorySceneReducer from './StorySceneReducer';
import SelectionStoryReducer from './SelectionStoryReducer'; 
import StoryConvoReducer from './StoryConvoReducer';
import SelectionConvoReducer from './SelectionConvoReducer'; 
import WeaponsListReducer from './WeaponsListReducer'; 
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
    playersHand: DrawCardReducer,
    registerReducer:RegisterReducer,
    storySceneLibrary: StorySceneReducer,
    selectedStoryId: SelectionStoryReducer,
    storyConvoLibrary: StoryConvoReducer,
    selectedConvoId: SelectionConvoReducer,
    weaponsLibrary: WeaponsListReducer,
}); 

export default rootReducer; 
