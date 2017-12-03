const INITIAL_STATE ={
    count : 0
}


export default (state = INITIAL_STATE, action) => {
    console.log(action); 
//     switch(action.type){
//         case 'select_story':
//             return action.payload;
//     default:
//         return state; 
//    }

    if(action.type === "next"){
       let count = state.count + 1
        return Object.assign({}, state, {count})
    }
    else if(action.type === "back"){
        let count = state.count - 1
         return Object.assign({}, state, {count})
    }
    else return state
}; 
