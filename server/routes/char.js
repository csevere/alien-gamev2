module.exports = function(router){
  const mysql = require('mysql'); 
  var config = require ('../config/config');
  var connection = mysql.createConnection(config); 
  connection.connect(); 

  router.post('/char', (req,res, next)=>{
    const charData = req.body; 

    //check the char
    var checkCharName = "SELECT * FROM `characters` WHERE `character` = ?;";
    connection.query(checkCharName, [charData.character], (error, results)=>{
      console.log('**********CHECKING CHAR RESULTS*********') 
      console.log(results); 
      if(error) throw error;
      if(results.length === 0){
        res.json({
          msg:'badcharName'
        })
      }else{
        const insertCharQuery = "UPDATE `characters` SET picture = ? WHERE `character` = ?;"; 
        connection.query(insertCharQuery, [charData.picture, charData.character], (error, results)=>{
          if(error){
            console.log(error)
            throw error; 
          }else {
            res.json({
              msg:'picInserted',
              pic: charData.picture 
            })
          }
          console.log("pic inserted success!")
        }); 
      }
    });
  });
}

