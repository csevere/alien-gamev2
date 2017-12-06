import { combineReducers } from 'redux'; 
import StorySceneReducer from './StorySceneReducer';
import SelectionStoryReducer from './SelectionStoryReducer'; 
import StoryConvoReducer from './StoryConvoReducer';
import SelectionConvoReducer from './SelectionConvoReducer'; 
 
const rootReducer =  combineReducers({
    storySceneLibrary: StorySceneReducer,
    selectedStoryId: SelectionStoryReducer,
    storyConvoLibrary: StoryConvoReducer,
    selectedConvoId: SelectionConvoReducer
}); 

export default rootReducer; 
