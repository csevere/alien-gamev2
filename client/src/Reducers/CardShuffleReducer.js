import data from './JSON/WeaponsList.json'; 

var INITIAL_STATE ={
  data
}

export default (state = INITIAL_STATE, action) => {
  if(action.type === "shuffle"){
    for(var i = 0; i < 1400; i++){
      var random1 = Math.floor(Math.random() * state.data.length);
      var random2 = Math.floor(Math.random() * state.data.length);
      // Store in temp, the value at index random1, in array theDeck (for later)
      var temp = state.data[random1];
      // Overwrite what's at index random1 with what's at index random2
      state.data[random1] = state.data[random2];
      // Overwrite what's at index random2 with what's in temp
      state.data[random2] = temp;
      var shuffled = state.data;
      console.log("SHUFFLED THE DECK!"); 
      console.log(shuffled); 
      console.log(state); 

     return Object.assign({}, state, {shuffled})
 
    }

  }else return state
}; 


