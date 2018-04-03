import {
  MUSICON,
  MUSICOFF
} from '../Actions/types';

var INITIAL_STATE = {
  music: "p-2 audio show"
} 

export default function (state = INITIAL_STATE, action){
  switch(action.type){
    case MUSICOFF:
      console.log(action); 
      var musicOff = "p-2 audio hide";
      // state.music = musicOff;
      state.music = musicOff;

      var music = state.music; 

      console.log("MUSIC OFF IN REDUCER"); 
      console.log(musicOff);
      console.log(state.music); 

      return Object.assign({}, state, {music})

    case MUSICON:
      console.log(action); 
      return Object.assign({}, state, {music})
      
    default:
      return state
  }
  return state; 
}
