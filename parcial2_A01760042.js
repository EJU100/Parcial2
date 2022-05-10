// Paquete necesario para conectar a bases de datos MySQL.
var mysql = require('mysql');
// Consulta SQL.
var sql = 'SELECT * FROM category LIMIT 10';

debugger 
// Parámetros de conexión a la base de datos.
var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "MedInf100!",
  database : 'parcial2_a01760042'
});


//Funcion que nos permite comprobar la conexión a la base de datos.
/* con.connect(function(err) {
   if (err) throw err;
  console.log("Connected!");
 });*/

// Funcion que nos devolverá resultados de la base de datos.
 con.connect(function(err) {
  if (err) throw err;
  //console.log("Connected!");
  con.query(sql, function (err, result) {
    if (err) throw err;

    // Bucle que recore los resultados y pinta en consola.
    for(i=0; i<result.length; i++){
    	console.log("Result: " + result[i].name);
    }

  });
}); 

const express = require("express");
const app = express();
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/ActividadInstalarNodeJs22.html");
});
app.listen(3000, function () {
    console.log('Instalación correcta, Hola!');
});