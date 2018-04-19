module.exports = function(router){

  const mysql = require('mysql'); 
  var config = require ('../config/config');
  var connection = mysql.createConnection(config); 
  connection.connect(); 
  var bcrypt = require ('bcrypt-nodejs');
  var randToken = require('rand-token'); 

  ////////////REGISTER THE USER//////////////////

  router.post('/register', (req, res, next)=>{
    console.log("*********** REGISTER INPUT RESULTS************"); 
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
        var insertPlayerQuery = "INSERT INTO players (email, username, `password`, `character`, token) VALUES (?,?,?,?,?);";
        connection.query(insertPlayerQuery, [playerData.email, playerData.username, hash, playerData.character, token], (error, results)=>{
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
            console.log("*************************")
            console.log("register success"); 
            console.log("*************************")
          }

          const insertCharQuery = "INSERT INTO characters (`character`, experience, level, time) VALUES (?, 100, 1, '0');"; 
          connection.query(insertCharQuery, [playerData.character, playerData.experience, playerData.level, playerData.time], (error, results)=>{
            if(error){
              console.log(error)
              throw error; 
            }
            console.log("character registration success!")
          }); 
        });
      }
    ).catch(
        (error)=>{
          console.log(error);
          res.json(error); 
        }
      )
  }); 

///LOGIN THE PLAYER /////

  router.post('/login', (req, res, next)=>{
    console.log("*********** LOGIN INPUT RESULTS************"); 
    console.log(req.body);
    const playerData = req.body; 
    var checkPlayerLogin = "SELECT * FROM players WHERE username = ?;";
    connection.query(checkPlayerLogin, [playerData.username], (error, results)=>{
      console.log('**********CHECKING RESULTS*********') 
      console.log(results); 
      if(error) throw error;
      if(results.length === 0){
        res.json({
          msg:'badUserName'
        })
        console.log("ERROR!")
      }else{
        results = JSON.stringify(results);
        var resJSON = JSON.parse(results);
        var checkHash = bcrypt.compareSync(playerData.password, resJSON[0].password);
        if(checkHash){
          const updateToken = "UPDATE players SET token = ? WHERE username = ?;";
          var token = randToken.uid(25); 
          connection.query(updateToken, [playerData.username, playerData.token], (error, results)=>{
            console.log('**********CHECKING JSON2*********')
            console.log(results); 
            res.json({
              msg: "loginSuccess",
              name: playerData.username,
              charName: resJSON[0].character,
              token
            })
            console.log("*************************")
            console.log("login success"); 
            console.log("*************************")
          })
        }else{
          res.json({
            msg: 'wrongPassword'
          })
        }
      }
    })
  }); 
}