
import {
  REGISTER,
  LOGIN,
  NEXT,
  BACK,
  DRAW,
  DEAL,
  SHUFFLE,
  ATTACK
} from './types';
import axios from 'axios';

const ROOT_URL = 'http://localhost:5000'; 

//REGISTER THE PLAYER

export function registerUser(playerData) {

  console.log("THE PLAYER DATA IS BELOW...")
  console.log(playerData);

  return function (dispatch) {
    axios.post(`${ROOT_URL}/register`, playerData)
      .then(response => {
        dispatch({ type: REGISTER, data:response});
      })
      .catch(error => { console.log(error)});
  }
}

//LOGIN IN THE PLAYER
export function loginUser(playerData) {

  console.log("THE PLAYER DATA IS BELOW...")
  console.log(playerData);

  return function (dispatch) {
    axios.post(`${ROOT_URL}/login`, playerData)
      .then(response => {
        dispatch({ type: LOGIN, data:response});
      })
      .catch(error => { console.log(error)});
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









