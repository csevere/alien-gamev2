import data from './WeaponsList.json'; 


var INITIAL_STATE ={
  data
}

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  if(action.type === "shuffle"){
    for(var i = 0; i < 1400; i++){
      var random1 = Math.floor(Math.random() * 19);
      var random2 = Math.floor(Math.random() * 19);
      // Store in temp, the value at index random1, in array theDeck (for later)
      var temp = state.data[random1];
      // Overwrite what's at index random1 with what's at index random2
      state.data[random1] = state.data[random2];
      // Overwrite what's at index random2 with what's in temp
      state.data[random2] = temp;
      var shuffled = state.data;
      console.log("LINE 32!"); 
      console.log(shuffled); 
      console.log(state); 

     return Object.assign({}, state, {shuffled})
 
    }

  }else return state
}; 


