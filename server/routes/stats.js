module.exports = function(router){
  var connection = require('./database');  

  router.post('/stats', (req,res, next)=>{
    console.log(req.body); 
    const db_picture = req.body.picture;
    const db_character = req.body.character; 
    const db_experience = req.body.experience;
    const db_level = req.body.level; 
    cond db_time = req.body.time; 
    //check the char
    const selectCharName = "SELECT * FROM `characters` WHERE `character` = ?;";
    connection.query(selectCharName, [db_character], (error, results)=>{
      if(error) throw new Error(err);  
      if(results.length > 0){
        console.log('**********CHECKING CHAR RESULTS*********') 
        console.log(results); 
        const updateStatsQuery = "UPDATE `characters` SET level = ?, experience = ?, time = ?  WHERE `character` = ?;"; 
        connection.query(updateStatsQuery, [db_level, db_experience, db_time, db_character], (error, results)=>{
          if(error){
            throw new Error(err); 
            res.json({msg: 'error'}) 
          }
          console.log(results); 
          console.log("*************************");
          console.log("stats updated successfull!");
          console.log("*************************");
        }); 

        const checkCharName2 = "SELECT * FROM `characters` WHERE `character` = ?;";
        connection.query(checkCharName2, [db_character], (error, results)=>{
          if(error) throw new Error(err); 
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
          console.log("*************************");
          console.log("Successfully got db stats!"); 
          console.log("*************************");
        }); 
      }
    });
  });
}
