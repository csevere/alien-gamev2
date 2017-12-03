import { combineReducers } from 'redux'; 
import StorySceneReducer from './StorySceneReducer';
import SelectionStoryReducer from './SelectionStoryReducer'; 
 
const rootReducer =  combineReducers({
    storySceneLibrary: StorySceneReducer,
    selectedStoryId: SelectionStoryReducer
}); 

export default rootReducer; 
