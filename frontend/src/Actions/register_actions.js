// import axios from 'axios';

import $ from 'jquery';

export default function(playerData){
  console.log("Auth Action is running...")
  console.log(playerData);
  
  var authPromise = $.ajax({
    method: "POST",
    url: 'http://localhost:5000/register',
    data: playerData
  })
  return{
    type: "REGISTER",
    payload: authPromise 
  }
}