import {
  CHOOSE
} from '../Actions/types';

export default function (state = [], action){
  switch(action.type){
    case CHOOSE:
      console.log(action); 
      return { response:action.data, ...state }
    default:
      return state 
  }
  return state; 
}