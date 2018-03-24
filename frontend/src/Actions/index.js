
import {
  REGISTER,
  AUTH_ERROR
} from './types';
import axios from 'axios';

const ROOT_URL = 'http://localhost:5000'; 

export function registerUser(playerData) {

  console.log("THE PLAYER DATA IS BELOW...")
  console.log(playerData);

  const request = axios({
    method: "post",
    url: `${ROOT_URL}/register`,
    data: playerData,
  }) 

  return function (dispatch) {
    axios.post(`${ROOT_URL}/register`, playerData)
      .then(response => {
        dispatch({ type: REGISTER, data: request});
      })
      .catch(response => console.log('error'));
  }
}

// export function authError(error) {
//   return {
//     type: AUTH_ERROR,
//     payload: error
//   };
// }


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









