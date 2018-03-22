export default function (state = [], action){
  if(action.type == 'REGISTER'){
    return action.payload; 
  }else{
    return state; 
  }
}