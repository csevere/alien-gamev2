import { combineReducers } from 'redux'; 
import StoryTextReducer from './StoryTextReducer';
import SelectionStoryReducer from './SelectionStoryReducer'; 
 
const rootReducer =  combineReducers({
    storytextlibrary: StoryTextReducer,
    selectedStoryId: SelectionStoryReducer
}); 

export default rootReducer; 
