// Paquete necesario para conectar a bases de datos MySQL.
var mysql = require('mysql');
// Consulta SQL.
var sql = 'SELECT * FROM category LIMIT 10';

debugger 
// Parámetros de conexión a la base de datos.
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "itesm2022",
  database : 'parcial2_a01760042'
});


//Funcion que nos permite comprobar la conexión a la base de datos.
con.connect(function(err) {
   if (err) throw err;
  console.log("Connected!");

  // Inserte dos nuevos registros sobre la tabla Alumnos
  con.query("INSERT INTO Alumnos(Nombre, Identificador, Email, Carrera) VALUES('Eren', 'A01760042','a01760042@tec.mx','estudiante'), ('Jesus', 'a00112233','a00112233@tec.mx','estudiante')", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

  // Consultar información de la tabla Alumnos
  con.query("SELECT * FROM Alumnos", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

  // Actualizar el nombre del segundo registro de la tabla Alumnos.
  con.query("UPDATE Alumnos SET Nombre = 'BORRAR ALUMNO' WHERE Id = 14", function (err, result) {
    if (err) throw err;
    console.log(result);
  });

  // Consultar información de la tabla Alumnos
  con.query("SELECT * FROM Alumnos", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

  // Borrar segundo registro de la tabla Alumnos.
  con.query("DELETE FROM Alumnos WHERE Id = 14", function (err, result) {
    if (err) throw err;
    console.log(result);
  });

  // Consultar información de la tabla Alumnos
  con.query("SELECT * FROM Alumnos", function (err, result, fields){
    if (err) throw err;
    console.log(result);
  });
 });



// Funcion que nos devolverá resultados de la base de datos.
 /*con.connect(function(err) {
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
});*/