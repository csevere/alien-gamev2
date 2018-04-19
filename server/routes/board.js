module.exports = function(router){
  var connection = require('./database');  

  router.post('/board', (req,res,next)=>{
    console.log(req.body);
    const db_picture = req.body.picture;
    const db_character = req.body.character; 
    const db_experience = req.body.experience;
    const db_level = req.body.level; 
    //check the char
    const selectCharStats = "SELECT * FROM characters ORDER BY experience DESC LIMIT 10;";
    connection.query(selectCharStats, [db_picture, db_character, db_experience, db_level], (error, results)=>{
      if(error) throw new Error(err);     
      if(results.length > 0){
        results = JSON.stringify(results); 
        var resJSON = JSON.parse(results);
        console.log('**********CHECKING ALL CHAR RESULTS*********') 
        console.log(results);
        res.json({
          results: resJSON,
          msg: 'showStats'
        })
        console.log("*************************");
        console.log("Stats successfully taken from db!"); 
        console.log("*************************");
      }
    });
  });
}
