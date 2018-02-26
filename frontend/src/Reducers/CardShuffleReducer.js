import data from './WeaponsList.json'; 

const INITIAL_STATE2 ={
  data:data 
}

console.log(data); 



export default (state = INITIAL_STATE2, action) => {
  console.log(action);
  // console.log( "NOT SHUFFLED" + state.data);
  console.log("LOOK HERE" + data);
  let count = 0;

  if(action.type === "shuffle"){
    for(let i = 0; i < 6; i++){
      count++;
      console.log(count + " COUNT");
      var random1 = Math.floor(Math.random() * 19);
      var random2 = Math.floor(Math.random() * 19);
      // Store in temp, the value at index random1, in array theDeck (for later)
      var temp = data[random1];
      // Overwrite what's at index random1 with what's at index random2
      data[random1] = data[random2];
      // Overwrite what's at index random2 with what's in temp
      data[random2] = temp;

      
      console.log( "SHUFFLED"+ data); 

     return Object.assign({}, state, {data})
 
    }

  }else return state
}; 


