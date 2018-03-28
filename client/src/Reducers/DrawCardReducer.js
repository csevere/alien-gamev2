import data from './JSON/WeaponsList.json';

var INITIAL_STATE ={
  data,
  playersHand: [

      {
        "id": 0,
        "name":"Rocket Launcher",
        "image": "assets/deck/weapons/rocketlauncher.jpg",
        "damage": 35
    },

    {
      "id": 2,
      "name":"The Thermal Gun",
      "image": "assets/deck/weapons/thermalgun.jpg",
      "damage": 35
    }
  ],
}

export default (state = INITIAL_STATE, action) => { 
  if(action.type === "draw"){
    console.log("PLAYERS HAND IN REDUCER"); 
    console.log(state.playersHand);

    if(state.data.length < 20 && state.data.length > 0){
      return {
        ...state,
        playersHand: [...state.playersHand,state.data.shift()]
      }
    } else return state; 
  } else return state; 
}


