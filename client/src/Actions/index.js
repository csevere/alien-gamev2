import {
  REGISTER,
  LOGIN,
  LOGOUT,
  CHOOSE,
  NEXT,
  BACK,
  DRAW,
  DEAL,
  SHUFFLE,
  ATTACK,
  MUSICOFF,
  MUSICON
} from './types';
import axios from 'axios';
import weapons from '../Reducers/JSON/WeaponsList.json'; 

const ROOT_URL = 'http://localhost:5000'; 

//REGISTER THE PLAYER
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

//LOGIN IN PLAYER
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

// LOGOUT PLAYER 
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


//CHOOSE CHARACTERS

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

//SCENE ACTIONS/////
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


//BATTLE ACTIONS /////

export const shuffleCards = () =>{
  for(var i = 0; i < 1400; i++){
    var random1 = Math.floor(Math.random() * weapons.length);
    var random2 = Math.floor(Math.random() * weapons.length);
    // Store in temp, the value at index random1, in array theDeck (for later)
    var temp = weapons[random1];
    // Overwrite what's at index random1 with what's at index random2
    weapons[random1] = weapons[random2];
    // Overwrite what's at index random2 with what's in temp
    weapons[random2] = temp;
    var shuffled = weapons;
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


export const dealNewDeck = () =>{
  return{
      type: DEAL
  };
}





export const attackEnemy = () =>{
  return{
      type: ATTACK
  };
}

//MUSIC
export const musicOn = () =>{
  console.log("MUSIC TURNED ON");
  return{
    type: MUSICON
  }
}

export const musicOff = () =>{
  console.log("MUSIC TURNED OFF");
  return{
    type: MUSICOFF
  }
}









