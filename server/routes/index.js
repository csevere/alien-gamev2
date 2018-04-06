
const express = require('express');
const router = express.Router();
//bypassing cors errors 
const cors = require('cors'); 
const auth = require('./auth');
const char = require('./char');
const stats = require('./stats'); 
const board = require('./board'); 

router.use(cors()); 

auth(router); 
char(router); 
stats(router);
board(router); 


router.get('/', (req, res, next)=> {
  res.send({msg: 'Everything is working'}); 
})

module.exports = router;


