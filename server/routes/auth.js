module.exports = function(router){
  var connection = require('./database');  
  var bcrypt = require ('bcrypt-nodejs');
  var randToken = require('rand-token'); 

  ////////////REGISTER THE USER//////////////////
  //use promises

  router.post('/register', (req, res, next)=>{
    console.log("*********** REGISTER INPUT RESULTS************"); 
    console.log(req.body);
    const db_email = req.body.email;
    const db_username = req.body.username;
    const db_character = req.body.character;
    var db_experience = "";
    var db_time = ""; 
    var db_level = ""; 
    const hash = bcrypt.hashSync(req.body.password);

    const checkPlayerForm = new Promise((resolve, reject)=>{
      const checkPlayerFormQuery = "SELECT * FROM players where email = ? OR username = ? OR `character` = ?;";
      connection.query(checkPlayerFormQuery, [db_email, db_username, db_character],(error, results)=>{
        if(error) throw new Error(err);       
        //check player's email, username, character first
        if(results.length > 0){
          console.log("*********DB RESULTS********");
          results = JSON.stringify(results);
          var resJSON = JSON.parse(results);
          console.log(resJSON);  
          var email = resJSON[0].email;
          var username = resJSON[0].username;
          var character = resJSON[0].character;
          if(db_email === email){
            reject({msg: 'emailAlreadyExists'});
          }else if(db_username === username){
            reject({msg: 'usernameAlreadyExists'});
          }else if(db_character === character){
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
        connection.query(insertPlayerQuery, [db_email, db_username, hash, db_character, token], (error, results)=>{
          if(error){
            throw new Error(err); 
            res.json({msg: 'error'}) 
          }else{
            res.json({
              msg:'playerInserted',
              token,
              username: db_username,
              email: db_email,
              character: db_character
            })
            console.log("*************************")
            console.log("registration success!"); 
            console.log("*************************")
          }

          const insertCharQuery = "INSERT INTO characters (`character`, experience, level, time) VALUES (?, 100, 1, '0');"; 
          connection.query(insertCharQuery, [db_character, db_experience, db_level, db_time], (error, results)=>{
            if(error){
              throw new Error(err); 
              res.json({msg: 'error'}) 
            }
            console.log("*************************")
            console.log("character registration success!");
            console.log("*************************")
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
    const db_username = req.body.username;
    const checkPlayerLogin = "SELECT * FROM players WHERE username = ?;";
    connection.query(checkPlayerLogin, [db_username], (error, results)=>{
      if(error) throw new Error(err);  
      if(results.length === 0){
        res.json({
          msg:'badUserName'
        })
        console.log("ERROR!")
      }else{
        results = JSON.stringify(results);
        var resJSON = JSON.parse(results);
        console.log('**********CHECKING RESULTS*********') 
        console.log(resJSON); 
        var checkHash = bcrypt.compareSync(req.body.password, resJSON[0].password);
        if(checkHash){
          const updateToken = "UPDATE players SET token = ? WHERE username = ?;";
          var token = randToken.uid(25); 
          connection.query(updateToken, [db_username, token], (error, results)=>{
            if(error) throw new Error(err); 
            console.log('**********CHECKING JSON2*********')
            console.log(results); 
            res.json({
              msg: "loginSuccess",
              name: db_username,
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