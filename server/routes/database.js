var mysql = require('mysql'); 
var config = require ('../config/config');
var util = require('util');
var pool = mysql.createPool({
  connectionLimit: 20,
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database
})

pool.getConnection((err, connection)=>{
  if(err){
    if(err.code === 'PROTOCOL_CONNECTION_LOST'){
      console.error('Database connection was closed.')
    }
    if (err.code === 'ER_CON_COUNT_ERROR'){
      console.error('Database has too many connections.')
    }
    if (err.code === 'ECONNREFUSED'){
      console.error('Database connection was refused.')
    }
    if (connection) connection.release()
    return
  }
})

//promisify the pool.query function so that we can use async/await with it
pool.query = util.promisify(pool.query); 

module.exports = pool; 