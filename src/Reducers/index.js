import { combineReducers } from 'redux'; 
import StoryTextReducer from './StoryTextReducer';
import SelectionStoryReducer from './SelectionStoryReducer'; 
 

export default combineReducers({
    storytextlibrary: StoryTextReducer,
    selectedStoryId: SelectionStoryReducer
}); 
