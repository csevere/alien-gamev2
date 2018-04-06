import {
  BACK,
  BOARD,
  CHOOSE,
  DRAW,
  DEAL,
  E_SHUFFLE,
  E_DRAW, 
  LOGIN,
  LOGOUT,
  NEXT,
  REGISTER,
  SHUFFLE,
  STATS
} from './types';
import axios from 'axios';
const ROOT_URL = 'http://localhost:5000'; 


/////////////////////////////////////////////////////////////
///////////////////////REGISTER PLAYER///////////////////////
/////////////////////////////////////////////////////////////
export const registerUser = (playerData) =>{
  console.log("THE PLAYER DATA IS BELOW...")
  console.log(playerData);
  return function (dispatch) {
    axios.post(`${ROOT_URL}/register`, playerData)
      .then(response => {
        dispatch({ type: REGISTER, data:response});
        //save the randToken to local storage
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('charName', response.data.token);
      })
      .catch(error => { console.log(error)});
  }
}


/////////////////////////////////////////////////////////////
///////////////////////LOGIN PLAYER//////////////////////////
/////////////////////////////////////////////////////////////
export const loginUser = (playerData) => {
  console.log("THE PLAYER DATA IS BELOW...")
  console.log(playerData);

  return function (dispatch) {
    axios.post(`${ROOT_URL}/login`, playerData)
      .then(response => {
        dispatch({ type: LOGIN, data:response, playerData});
        //save the randToken to local storage
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('charName', response.data.charName); 
        localStorage.setItem('name', playerData.username); 
        console.log(playerData.username); 
      })
      .catch(error => { console.log(error)});
  }
}


/////////////////////////////////////////////////////////////
///////////////////////LOGOUT PLAYER////////////////////////
/////////////////////////////////////////////////////////////
export const logoutUser = () =>{
  localStorage.removeItem('token'); 
  localStorage.removeItem('name'); 
  localStorage.removeItem('charName'); 
  localStorage.removeItem('pic'); 
  localStorage.removeItem('exp');
  localStorage.removeItem('level'); 
  return{
    type: LOGOUT
  }
}


/////////////////////////////////////////////////////////////
///////////////////////CHOOSE CHARACTERS/////////////////////
/////////////////////////////////////////////////////////////
export const choosePic = (charPicData) =>{
  console.log(charPicData)

  return function (dispatch){
    axios.post(`${ROOT_URL}/char`, charPicData)
    .then(response => {
      dispatch ({type: CHOOSE, data:response}); 
      console.log("**********EXP RESPONSE********")
      console.log(response);
      console.log("******************")
      localStorage.setItem('pic', charPicData.picture); 
      localStorage.setItem('exp', response.data.exp);
      localStorage.setItem('level', response.data.level); 
    })
    .catch(error => {console.log(error)}); 
  }
}

/////////////////////////////////////////////////////////////
///////////////////////SUBMIT BOARD STATS////////////////////
/////////////////////////////////////////////////////////////
export const submitStats = (timeData) =>{
  console.log(timeData)

  return function (dispatch){
    axios.post(`${ROOT_URL}/stats`, timeData)
    .then(response => {
      dispatch ({type: STATS, data:response}); 
      console.log("**********STATS RESPONSE********")
      console.log(response);
      console.log("******************")
      localStorage.setItem('exp', response.data.exp);
      localStorage.setItem('level', response.data.level); 
    })
    .catch(error => {console.log(error)}); 
  }
}


//////////////////////////////////////////////////
///////////////GET BOARD STATS////////////////////
/////////////////////////////////////////////////
export const getBoard = () =>{
  return function (dispatch){
    axios.get(`${ROOT_URL}/board`)
    .then(response => {
      dispatch ({type: BOARD, getboard:response}); 
      console.log("**********STATS RESPONSE********")
      console.log(response);
      console.log("******************")
    })
    .catch(error => {console.log(error)}); 
  }
}

///////////////////////////////////////////////////
////////////////////SCENE ACTIONS//////////////////
//////////////////////////////////////////////////

export const nextCount = () =>{
  return{
      type: NEXT
  };
}

export const backCount = () =>{
  return{
      type: BACK
  };
}


////////////////////////////////////////////////////
/////////////////// PLAYER BATTLE ACTIONS //////////////////
///////////////////////////////////////////////////

export const shuffleCards = (cards) =>{
  for(var i = 0; i < 1400; i++){
    var random1 = Math.floor(Math.random() * cards.length);
    var random2 = Math.floor(Math.random() * cards.length);
    // Store in temp, the value at index random1, in array theDeck (for later)
    var temp = cards[random1];
    // Overwrite what's at index random1 with what's at index random2
    cards[random1] = cards[random2];
    // Overwrite what's at index random2 with what's in temp
    cards[random2] = temp;
    var shuffled = cards;
    console.log("SHUFFLED THE DECK!"); 
    console.log(shuffled); 
    return{
        type: SHUFFLE,
        shuffle:shuffled 
    }
  };
}

export const drawCard = () =>{
  return{
    type: DRAW 
  }
}

///////////////////////////////////////////
///////////// ENEMY ACTIONS ///////////////
///////////////////////////////////////////

export const e_shuffleCards = (cards) =>{
  for(var i = 0; i < 1400; i++){
    var random1 = Math.floor(Math.random() * cards.length);
    var random2 = Math.floor(Math.random() * cards.length);
    // Store in temp, the value at index random1, in array theDeck (for later)
    var temp = cards[random1];
    // Overwrite what's at index random1 with what's at index random2
    cards[random1] = cards[random2];
    // Overwrite what's at index random2 with what's in temp
    cards[random2] = temp;
    var e_shuffled = cards;

    console.log("SHUFFLED THE ENEMY DECK!"); 
    console.log(e_shuffled);

    return{
        type: E_SHUFFLE,
        e_shuffle: e_shuffled 
    }
  };
}

export const drawECard = () =>{
  return{
    type: E_DRAW 
  }
}


//for later 
// export const drawECard = (hand,deck) =>{
//   hand.push(deck.shift()); 
//   console.log(hand);
//   console.log(deck); 
//   return{
//     type: E_DRAW, 
//     enemysHand: hand
//   }
// }


