module.exports = function(router){
  var connection = require('./database');  

  router.post('/char', (req,res, next)=>{
    console.log(req.body);
    const db_picture = req.body.picture;
    const db_character = req.body.character; 
    const db_experience = req.body.experience;
    const db_level = req.body.level; 
    //check the char
    const checkCharName = "SELECT * FROM characters WHERE `character` = ?;";
    connection.query(checkCharName, [db_character], (error, results)=>{
      if(error) throw new Error(err);  
      if(results.length > 0){
        console.log('**********CHECKING CHAR RESULTS*********') 
        results = JSON.stringify(results);
        var resJSON = JSON.parse(results);
        console.log(resJSON); 
        var character = resJSON[0].character;
        var picture = resJSON[0].picture;
        var experience = resJSON[0].experience;
        var level = resJSON[0].level;
        res.json({
          character,
          picture,
          exp: experience,
          level,
          msg: 'picInserted'
        })
        const updateCharQuery = "UPDATE characters SET picture = ? WHERE `character` = ?;"; 
        connection.query(updateCharQuery, [db_picture, db_character, db_experience, db_level], (error, results)=>{
          if(error) throw new Error(err); 
          console.log(results); 
          console.log("*************************");
          console.log("pic update successful!"); 
          console.log("*************************");
        }); 
      }
    });
  });
}

