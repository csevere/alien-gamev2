// export default (state = INITIAL_STATE, action) => {
//   console.log(action); 
// //     switch(action.type){
// //         case 'select_story':
// //             return action.payload;
// //     default:
// //         return state; 
// //    }

//   if(action.type === "next"){
//       let countC = state.countC + 1
//       console.log(state.countC)
//       return Object.assign({}, state, {countC})
//   }
//   else if(action.type === "back"){
//       let countC = state.countC >= 0 ? (state.countC - 1) : -1
  
//       return Object.assign({}, state, {countC})
//   }
//   else return state
// }; 