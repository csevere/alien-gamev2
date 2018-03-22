import $ from 'jquery'; 

export default function(playerData){
  var thePromise = $.ajax({
    method: 'POST',
    url: window.hostAddres + '/register',
    data: playerData
  })
  return{
    type: "REGISTER",
    payload: thePromise 
  }
}