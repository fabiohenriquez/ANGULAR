require("./app.js");

const express = require('express' );
const port =(process.env.port || 3000 );


//llamar express
const app = express();

//tipos de datos
app.use(express.json())

//app.use(bodyParser().json());
//config

app.set('port',port)

//rutas

app.use('/api', require('./rutas'))


//init
app.listen(app.get('port'),(error)=>{
  if(error){
    console.log("error express")
  }else{
    console.log('servidor (express) iniciado: '+port)
  }

})
