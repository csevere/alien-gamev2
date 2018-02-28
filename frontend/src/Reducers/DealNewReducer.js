import data from './WeaponsList.json';
import playersHand from './WeaponsList.json';


var INITIAL_STATE ={
  data,
  playersHand
}


export default (state = INITIAL_STATE, action) => { 
  if(action.type === "deal"){
    console.log("NEW DECK IN NEW DEAL REDUCER"); 
    console.log(state.newDeck);

    if(state.playersHand.length < 20 && state.playersHand.length > 0){
      return {
        ...state,
        data: [...state.newDeck, state.playersHand.push()]
      }
    } else return state; 
  } else return state; 
}
