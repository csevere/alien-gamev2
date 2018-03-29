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
  return{
      type: SHUFFLE
  };
}


export const dealNewDeck = () =>{
  return{
      type: DEAL
  };
}


export const drawCard = () =>{
  return{
      type: DRAW
  };
}


export const attackEnemy = () =>{
  return{
      type: ATTACK
  };
}

//MUSIC
export const musicOn = () =>{
  return{
    type: MUSICON
  }
}

export const musicOff = () =>{
  return{
    type: MUSICOFF
  }
}









