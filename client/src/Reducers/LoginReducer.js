import {
  LOGIN,
} from '../Actions/types';

export default function (state = [], action){

  switch(action.type){
    case LOGIN:
      console.log(action); 
      return {authenticated:true, response:action.data, ...state}
  }
  return state; 
}
