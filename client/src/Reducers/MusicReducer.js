import {
  MUSICON,
  MUSICOFF
} from '../Actions/types';

var INITIAL_STATE = "p-2 audio show";

export default function (state = INITIAL_STATE, action){
  switch(action.type){
    case MUSICOFF:
      console.log(action); 
      var music = "p-2 audio hide";
      return Object.assign({}, state, {music})
    case MUSICON:
      console.log(action); 
       music = "p-2 audio show"
       return Object.assign({}, state, {music})
    default:
      return state
  }
  return state; 
}
