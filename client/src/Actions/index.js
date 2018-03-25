
import {
  REGISTER,
  AUTH_ERROR
} from './types';
import axios from 'axios';

const ROOT_URL = 'http://localhost:5000'; 

//REGISTER THE USER 

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







export const nextCount = () =>{
  return{
      type: 'next'
  };
}

export const backCount = () =>{
  return{
      type: 'back'
  };
}

export const shuffleCards = () =>{
  return{
      type: 'shuffle'
  };
}


export const dealNewDeck = () =>{
  return{
      type: 'deal'
  };
}


export const drawCard = () =>{
  return{
      type: 'draw'
  };
}


export const attackEnemy = () =>{
  return{
      type: 'attack'
  };
}









