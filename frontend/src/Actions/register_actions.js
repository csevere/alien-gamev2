// import axios from 'axios';

import $ from 'jquery';

export default function(playerData){
  console.log("THE PLAYER DATA IS BELOW...")
  console.log(playerData);
  
  var authPromise = $.ajax({
    method: "post",
    url: 'http://localhost:5000/register',
    data: playerData,
  })

  console.log(authPromise); 
  return{
    type: "register",
    payload: authPromise 
  }
}

