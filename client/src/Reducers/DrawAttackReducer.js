import data from './JSON/Enemy1Deck.json'; 
import { E_DRAW } from '../Actions/types';

var INITIAL_STATE ={
  data,
  enemysHand: [
    {
      "id": 0,
      "name":"Glacial Crusher",
      "image": "assets/aliens/attacks1/glacialcrusher.jpg",
      "damage": "40"
    },
  
    {
      "id": 1,
      "name":"Blizzard Barrage",
      "image": "assets/aliens/attacks1/blizzardbarrage.jpg",
      "damage": "45"  
    }
  ]
}

export default (state = INITIAL_STATE, action) => { 
  switch(action.type){
    case E_DRAW:
      console.log("PLAYERS HAND IN REDUCER"); 
      console.log(state.enemysHand);
      return {
        ...state,
        enemysHand: [...state.enemysHand,state.data.shift()]
      }
    default:
      return state
  } return state 
}
