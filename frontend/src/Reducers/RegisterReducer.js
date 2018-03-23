
export default function (state = [], action){
  if(action.type == 'register'){
    console.log(action.payload.data);
    return action.payload; 
  }else{
    return state; 
  }
}