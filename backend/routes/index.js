
var express = require('express');
var router = express.Router();
var mysql = require('mysql'); 
var config = require ('../config/config'); 
//set up connection 
var connection = mysql.createConnection(config); 
connection.connect(); 
//for hashing and checking password
var bcrypt = require ('bcrypt-nodejs');
//generating user token
var randToken = require('rand-token'); 

// console.log(connection); 

////////////POSTS REQUEST//////////////////

router.post('/register', (req, res)=>{
  console.log("TESTING 2!"); 
  console.log(req.body);
  console.log(req.body.email);

  const playerData = req.body; 
  const hash = bcrypt.hashSync(playerData.password);

  console.log(hash); 

  //check player's email first

  const checkPlayerForm = new Promise((resolve, reject)=>{
    const checkPlayerEmailQuery = `SELECT * FROM players where email = ?;`;
    const checkPlayerUsernameQuery = `SELECT * FROM players where username = ?;`;
    const checkPlayerCharQuery = "SELECT * FROM players where `character` = ?;"; 

    connection.query(checkPlayerEmailQuery, [playerData.email],(error, results)=>{
      if(error) throw error;
      if(results.length > 0){
        reject({msg: 'emailAlreadyExists'});
      }else{
        resolve();
      }
    });

    connection.query(checkPlayerUsernameQuery, [playerData.username],(error, results)=>{
      if(error) throw error;
      if(results.length > 0){
        reject({msg: 'usernameAlreadyExists'});
      }else{
        resolve();
      }
    });

    connection.query(checkPlayerCharQuery, [playerData.character],(error, results)=>{
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
      var token = randToken.uid(25); 
      var insertQuery = "INSERT INTO players (email, username, `password`, `character`, token) VALUES (?,?,?,?,?);";
      connection.query(insertQuery, [playerData.email, playerData.username, hash, playerData.character, token], (error, results)=>{
        if(error){
          throw error;
          res.json({
            msg: 'error'
          })
        }else{
          res.json({
            msg:"playerInserted",
            token,
            username: playerData.username,
            email: playerData.email,
            character: playerData.character
          })
        }
      })
    }
  ).catch(
      (error)=>{
        console.log(error);
        res.json(error); 
      }
    )
}); 





module.exports = router;
