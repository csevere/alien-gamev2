module.exports = function(router){
  const mysql = require('mysql'); 
  var config = require ('../config/config');
  var connection = mysql.createConnection(config); 
  connection.connect(); 

  router.get('/board', (req,res, next)=>{
    const charData = req.body; 

    //check the char
    var selectCharStats = "SELECT * FROM characters;";
    connection.query(selectCharStats, (error, results)=>{
      console.log('**********CHECKING ALL CHAR RESULTS*********') 
      console.log(results); 
      if(error) throw error;
      if(results.length > 0){
        results = JSON.stringify(results);
        var resJSON = JSON.parse(results);
        var character = resJSON[0].character;
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
          msg: 'showStats'
        })
        console.log("Stats take!"); 
      }
    });
  });
}
