
const express = require('express');
const router = express.Router();
//bypassing cors errors 
const cors = require('cors'); 
const auth = require('./auth');

auth(router); 

router.get('/', (req, res, next)=> {
  res.send({msg: 'Everything is working'}); 
})

router.use(cors()); 

module.exports = router;


