
const express = require('express');
const router = express.Router();
//bypassing cors errors 
const cors = require('cors'); 
const auth = require('./auth');

router.use(cors()); 

auth(router); 

router.get('/', (req, res, next)=> {
  res.send({msg: 'Everything is working'}); 
})

module.exports = router;


