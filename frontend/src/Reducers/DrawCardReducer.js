import data from './WeaponsList.json'; 

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
  ]



}


export default (state = INITIAL_STATE, action) => { 
  if(action.type === "draw"){
    console.log("PLAYERS HAND IN REDUCER"); 
    console.log(state.playersHand);
   
    return {
        ...state,
        playersHand: [...state.playersHand,state.data.shift()]
    }

  } else return state; 
}


