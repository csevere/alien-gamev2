import data from './JSON/WeaponsList.json'; 
import { SHUFFLE } from '../Actions/types';

var INITIAL_STATE = {
  data
}

export default (state = INITIAL_STATE, action) =>{
  switch(action.type){
    case SHUFFLE:
      console.log(action);
      return{ shuffled:action.shuffle, ...state }
    default:
      return state 
  }
  return state; 
}


