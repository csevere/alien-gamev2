import data from './JSON/WeaponsList.json';
import { DRAW } from '../Actions/types';

var INITIAL_STATE ={
  data,
  playersHand: [

      {
        "id": 0,
        "name":"Rocket Launcher",
        "image": "assets/deck/weapons/rocketlauncher.jpg",
        "damage": 45
    },

    {
      "id": 1,
      "name":"High Thermal Gun",
      "image": "assets/deck/weapons/thermalgun.jpg",
      "damage": 40
    }
  ],
}

export default (state = INITIAL_STATE, action) => { 
  switch(action.type){
    case DRAW:
      console.log("PLAYERS HAND IN REDUCER"); 
      console.log(state.playersHand);
      return {
        ...state,
        playersHand: [...state.playersHand,state.data.shift()]
      }
    default:
      return state
  }
}