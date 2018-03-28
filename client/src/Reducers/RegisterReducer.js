import {
  REGISTER,
} from '../Actions/types';

export default function (state = [], action){
  switch(action.type){
    case REGISTER:
      console.log(action); 
      return {authenticated:true, response:action.data, ...state}
    default:
      return state
  }
  return state; 
}

