import axios from 'axios';

const ROOT_URL = 'http://localhost:5000'; 

export const request = axios({
  method: "post",
  url: `${ROOT_URL}/register`,
  data: playerData
}) 