var mysql = require('mysql2');

var conexion = mysql.createConnection({
  host: 'localhost',
  database:'penaltidb',
  user: 'root',
  password: 'impactmobilefabiohenriquez'

});

conexion.connect(function(error){
  if(error){
    throw error;
  }else{
    console.log("Conexion exitosa");
  }

});
/*
conexion.query('SELECT * from equipos', function(error, results, fields){
  if(error){
    throw error;
  }
  results.forEach(result => {
    console.log(result);
  })

})

*/
module.exports = conexion;

//conexion.end();
