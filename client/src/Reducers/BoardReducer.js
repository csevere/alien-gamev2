import {
  STATS,
  BOARD
} from '../Actions/types';

export default function (state = [], action){
  switch(action.type){
    case STATS:
      console.log(action); 
      return { response:action.data, ...state }
    case BOARD:
      console.log(action); 
      return { response:action.getboard, ...state }
    default:
      return state; 
  }
}