import {
  STATS
} from '../Actions/types';

export default function (state = [], action){
  switch(action.type){
    case STATS:
      console.log(action); 
      return { response:action.data, ...state }
    default:
      return state; 
  }
}