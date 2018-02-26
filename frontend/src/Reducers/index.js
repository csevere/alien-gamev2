import { combineReducers } from 'redux';
import CardShuffleReducer from './CardShuffleReducer';  
import StorySceneReducer from './StorySceneReducer';
import SelectionStoryReducer from './SelectionStoryReducer'; 
import StoryConvoReducer from './StoryConvoReducer';
import SelectionConvoReducer from './SelectionConvoReducer'; 
import WeaponsListReducer from './WeaponsListReducer'; 
// import DealWeaponsReducer from './DealWeaponsReducer';
 
const rootReducer =  combineReducers({
    cardShuffle: CardShuffleReducer,
    storySceneLibrary: StorySceneReducer,
    selectedStoryId: SelectionStoryReducer,
    storyConvoLibrary: StoryConvoReducer,
    selectedConvoId: SelectionConvoReducer,
    weaponsLibrary: WeaponsListReducer
}); 

export default rootReducer; 
