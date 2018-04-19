import data from './JSON/Enemy1Deck.json'; 
import { E_SHUFFLE } from '../Actions/types';

var INITIAL_STATE = {
  data
}

export default (state = INITIAL_STATE, action) =>{
  switch(action.type){
    case E_SHUFFLE:
      console.log(action);
      return{ e_shuffled: action.e_shuffle, ...state }
    default:
      return state; 
  }
}
