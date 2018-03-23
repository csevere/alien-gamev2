import { combineReducers } from 'redux';
import CardShuffleReducer from './CardShuffleReducer'; 
import DealNewReducer from './DealNewReducer';
import DrawCardReducer from './DrawCardReducer';  
import StorySceneReducer from './StorySceneReducer';
import SelectionStoryReducer from './SelectionStoryReducer'; 
import StoryConvoReducer from './StoryConvoReducer';
import SelectionConvoReducer from './SelectionConvoReducer'; 
import WeaponsListReducer from './WeaponsListReducer'; 
import WeaponsListReducer2 from './WeaponsList2Reducer'; 
import RegisterReducer from './RegisterReducer';

// import DealWeaponsReducer from './DealWeaponsReducer';
 
const rootReducer =  combineReducers({
    cardShuffle: CardShuffleReducer,
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
