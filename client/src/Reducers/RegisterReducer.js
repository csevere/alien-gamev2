import {
  REGISTER,
  AUTH_ERROR,
} from '../Actions/types';

export default function (state = [], action){

  switch(action.type){
    case REGISTER:
    console.log(action); 
      return {authenticated:true, response:action.data, ...state}
    case AUTH_ERROR:
      return {error:action.payload, ...state}
  }
  return state; 
}



// getDefinitions().then(function(defs){
//   //access them here
// });

