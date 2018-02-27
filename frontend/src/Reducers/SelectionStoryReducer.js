const INITIAL_STATE ={
    count : 0
}


export default (state = INITIAL_STATE, action) => {
    

    if(action.type === "next"){
        let count = state.count + 1
        console.log(state.count)
        return Object.assign({}, state, {count})
    }
    else if(action.type === "back"){
        let count = state.count >= 0 ? (state.count - 1) : -1
    
        return Object.assign({}, state, {count})
    }
    else return state
}; 
