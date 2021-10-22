const rutas = require('express').Router()
const conexion = require('./app')

//-----rutas------

rutas.get('/',(req,res)=>{
  let sql = 'SELECT * from equipos'
  conexion.query(sql,(err,rows,fields)=>{
    if(err) throw err;
    else{
      return res.json(rows)
    }
  })

})

rutas.get('/test', (req, res) => {
  console.log("test 1")
  res.status(200).json({
    hey: "hola"
  })
})

//un elemento

rutas.get('/:id',(req,res)=>{
  const {id} = req.params

  let query = 
    ' SELECT *' +
    ' FROM equipos' +
    ' WHERE nombre_equipo = ?'
  ;

  let values = [
    id
  ]

  conexion.query(query,values, (err, results, fields) =>{
    if(err) throw err;
    else{
      res.json(results)
    }
  })

} )


//metodo agregar
rutas.post('/',(req,res)=>{
  const{nombre_equipo,pais_origen,foto} = req.body

  let sql = `insert into equipos(nombre_equipo,pais_origen,foto) values('${nombre_equipo}','${pais_origen}','${foto}')`
  conexion.query(sql,(err,rows,fields)=>{
    if(err) throw err
    else{
      res.json({status: 'equipo agregado'})
    }
  })
})

//metodo eliminar


rutas.delete('/:id',(req,res)=> {
  const{id} = req.params
  let sql = `delete from equipos where nombre_equipo= '${id}'`
  conexion.query(sql,(err,rows,fields)=>{
    if(err) throw err
    else{
      res.json({status: 'equipo eliminado'})
    }
  })

});


//metodo modificar

rutas.put('/:id',(req,res)=>{
  const{id} = req.params
  const{pais_origen,foto} = req.body

  let sql = `update equipos set pais_origen='${pais_origen}',foto='${foto}' where
  nombre_equipo='${id}'`

  conexion.query(sql,(err,rows,fields)=>{
    if(err) throw err
    else{
      res.json({status: 'equipo modificado'})
    }
  })


})


/*rutas.get('/',function(req, res) {
  res.send('probando rutas/inicio')
});*/

module.exports = rutas;
