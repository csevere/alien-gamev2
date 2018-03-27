
const express = require('express');
const router = express.Router();
//bypassing cors errors 
const cors = require('cors'); 
const auth = require('./auth');
const char = require('./char');

router.use(cors()); 

auth(router); 
char(router); 


router.get('/', (req, res, next)=> {
  res.send({msg: 'Everything is working'}); 
})

module.exports = router;


