module.exports = function(router){
  const mysql = require('mysql'); 
  var config = require ('../config/config');
  var connection = mysql.createConnection(config); 
  connection.connect(); 
  var bcrypt = require ('bcrypt-nodejs');
  var randToken = require('rand-token'); 

  ////////////POSTS REQUEST//////////////////

  router.post('/register', (req, res, next)=>{
    console.log("*********** INPUT RESULTS************"); 
    console.log(req.body);
    const playerData = req.body; 
    const hash = bcrypt.hashSync(playerData.password);

    const checkPlayerForm = new Promise((resolve, reject)=>{
      const checkPlayerFormQuery = "SELECT * FROM players where email = ? OR username = ? OR `character` = ?;";
      connection.query(checkPlayerFormQuery, [playerData.email, playerData.username, playerData.character],(error, results)=>{
        console.log("*********DB RESULTS********");
        console.log(results); 
        // console.log(resJSON);  
        if(error) throw error;
        //check player's email, username, character first
        if(results.length > 0){
          results = JSON.stringify(results);
          var resJSON = JSON.parse(results);
          var email = resJSON[0].email;
          var username = resJSON[0].username;
          var character = resJSON[0].character;
          if(playerData.email === email){
            reject({msg: 'emailAlreadyExists'});
          }else if(playerData.username === username){
            reject({msg: 'usernameAlreadyExists'});
          }else if(playerData.character === character){
            reject({msg: 'characterAlreadyExists'});
          }
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
              msg:'playerInserted',
              token,
              username: playerData.username,
              email: playerData.email,
              character: playerData.character
            })
            console.log("************** ***********")
            console.log("success"); 
            console.log("************** RES***********")
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

}