module.exports = function(router){
  const mysql = require('mysql'); 
  var config = require ('../config/config');
  var connection = mysql.createConnection(config); 
  connection.connect(); 

  router.post('/board', (req,res, next)=>{
    const charData = req.body; 

    //check the char
    var selectCharName = "SELECT * FROM `characters` WHERE `character` = ?;";
    connection.query(selectCharName, [charData.character], (error, results)=>{
      console.log('**********CHECKING CHAR RESULTS*********') 
      console.log(results); 
      if(error) throw error;
      if(results.length > 0){
        const updateStatsQuery = "UPDATE `characters` SET level = ?, experience = ?, time = ?  WHERE `character` = ?;"; 
        connection.query(updateStatsQuery, [charData.level, charData.experience, charData.time, charData.character], (error, results)=>{
          if(error){
            console.log(error)
            throw error; 
          }
          console.log(results); 
          
          console.log("stats updated success!")
        }); 
        const checkCharName2 = "SELECT * FROM `characters` WHERE `character` = ?;";
        connection.query(checkCharName2, [charData.character], (error, results)=>{
          if(error){
            console.log(error)
            throw error; 
          }
          results = JSON.stringify(results);
          var resJSON = JSON.parse(results);
          var character = resJSON[0].character;
          var picture = resJSON[0].picture;
          var experience = resJSON[0].experience;
          var level = resJSON[0].level;
          var time = resJSON[0].time; 
          console.log(experience);
          console.log(level);
          res.json({
            character,
            picture,
            exp: experience,
            level,
            time,
            msg: 'updatedStats'
          })
          console.log(results); 
        }); 
      }
    });
  });
}
