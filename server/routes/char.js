module.exports = function(router){
  const mysql = require('mysql'); 
  var config = require ('../config/config');
  var connection = mysql.createConnection(config); 
  connection.connect(); 

  router.post('/char', (req,res, next)=>{
    const charData = req.body; 

    //check the char
    var checkCharName = "SELECT * FROM characters WHERE `character` = ?;";
    connection.query(checkCharName, [charData.character], (error, results)=>{
      console.log('**********CHECKING CHAR RESULTS*********') 
      console.log(results); 
      if(error) throw error;
      if(results.length > 0){
        results = JSON.stringify(results);
        var resJSON = JSON.parse(results);
        var character = resJSON[0].character;
        var picture = resJSON[0].picture;
        var experience = resJSON[0].experience;
        var level = resJSON[0].level;
        console.log(experience);
        console.log(level);
        res.json({
          character,
          picture,
          exp: experience,
          level,
          msg: 'picInserted'
        })
        const updateCharQuery = "UPDATE characters SET picture = ? WHERE `character` = ?;"; 
        connection.query(updateCharQuery, [charData.picture, charData.character, charData.experience, charData.level], (error, results)=>{
          if(error){
            console.log(error)
            throw error; 
          }
          console.log(results); 
          console.log("pic updated success!")
        }); 
      }
    });
  });
}

