import {
  LOGIN,
  LOGOUT
} from '../Actions/types';

export default function (state = [], action){
  switch(action.type){
    case LOGIN:
      console.log(action); 
      return { authenticated:true, response:action.data, ...state }
    case LOGOUT:
      return []
    default:
      return state 
  }
}
