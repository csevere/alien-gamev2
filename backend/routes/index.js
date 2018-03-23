var express = require('express');
var router = express.Router();
var mysql = require('mysql'); 
var config = require ('../config'); 
var fs = require('fs');
//for hashing and checking password
var bcrypt = require ('bcrypt-nodejs');
//generating user token
var randToken = require('rand-token'); 

//set up connection 
var connection = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database
});

connection.connect(); 

//////////////POSTs REQUEST//////////////////

router.post('/register', (req, res)=>{
  console.log(req.body);
  console.log(req.body.email);

  const email = req.body.email;
  const username = req.body.username;
  const password = bycrypt.hashSync(req.body.password); 
  const character = req.body.password;

  console.log(password); 


  //check player's email first

  const checkPlayerForm = new Promise((resolve, reject)=>{
    const checkPlayerEmailQuery = "SELCT * FROM players where email = ?";
    const checkPlayerUsernameQuery = "SELCT * FROM players where username = ?";
    const checkPlayerCharQuery = "SELCT * FROM players where character = ?"

    connection.query(checkPlayerEmailQuery, [email],(error, results)=>{
      if(error) throw error;
      if(results.length > 0){
        reject({msg: 'emailAlreadyExists'});
      }else{
        resolve();
      }
    });

    connection.query(checkPlayerUsernameQuery, [username],(error, results)=>{
      if(error) throw error;
      if(results.length > 0){
        reject({msg: 'usernameAlreadyExists'});
      }else{
        resolve();
      }
    });

    connection.query(checkPlayerCharQuery, [character],(error, results)=>{
      if(error) throw error;
      if(results.length > 0){
        reject({msg: 'characterAlreadyExists'});
      }else{
        resolve();
      }
    });

  });

  checkPlayerForm.then(
    () => {
      //set up a token for the user
      var token = randToken.uid(40); 
      var insertQuery = "INSERT INTO players (email, username, password, character, token) VALUES (?,?,?,?,?);";
      connection.query(insertQuery, [email, username, password, character, token], (error, results)=>{
        if(error){
          throw error
          res.json({
            msg: 'error'
          })
        }else{
          res.json({
            msg:"playerInserted",
            token,
            username,
            email
          })
        }
      })
    }
  ).catch(
      (error)=>{
        throw error
      }
    )
}); 



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
