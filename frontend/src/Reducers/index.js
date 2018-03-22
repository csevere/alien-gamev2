import { combineReducers } from 'redux';
import CardShuffleReducer from './CardShuffleReducer'; 
import DrawCardReducer from './DrawCardReducer';  
import StorySceneReducer from './StorySceneReducer';
import SelectionStoryReducer from './SelectionStoryReducer'; 
import StoryConvoReducer from './StoryConvoReducer';
import SelectionConvoReducer from './SelectionConvoReducer'; 
import WeaponsListReducer from './WeaponsListReducer'; 
import RegisterReducer from './RegisterReducer';
// import DealWeaponsReducer from './DealWeaponsReducer';
 
const rootReducer =  combineReducers({
    cardShuffle: CardShuffleReducer,
    playersHand: DrawCardReducer,
    registerReducer:RegisterReducer,
    storySceneLibrary: StorySceneReducer,
    selectedStoryId: SelectionStoryReducer,
    storyConvoLibrary: StoryConvoReducer,
    selectedConvoId: SelectionConvoReducer,
    weaponsLibrary: WeaponsListReducer
}); 

export default rootReducer; 
