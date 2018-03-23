import data from './WeaponsList.json'; 
import data2 from './WeaponsList2.json';

var INITIAL_STATE ={
  data,
  data2
}

export default (state = INITIAL_STATE, action) => { 
  if(action.type === "deal"){
    if(state.data.length < 1){
      var temp = state.data2; 
      console.log("IF STATEMENT WORKS!")
      state.data = temp; 
      var newdeck = state.data;
      console.log("NEW DECK IN NEW DEAL REDUCER LINE 16"); 
      console.log(state.data);
      console.log("THIS IS LINE 18"); 
      console.log(state.data2); 
      console.log("THIS IS LINE 19");
      console.log(newdeck);   
      return Object.assign({}, state, {data})
    } return state; 
  } else return state; 
}
