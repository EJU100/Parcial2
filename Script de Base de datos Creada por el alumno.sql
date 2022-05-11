--
-- Creación de base de datos `parcial2_A01760042` 
--

CREATE DATABASE parcial2_A01760042;

show databases;

USE parcial2_A01760042;

--
-- Estructura de tabla para la tabla `Alumnos`
--
CREATE TABLE Alumnos (
     Id INT NOT NULL AUTO_INCREMENT,
     Nombre CHAR(150) NOT NULL,
     Identificador CHAR(15) NOT NULL,
     Email CHAR(80),
     Carrera CHAR(50),
     PRIMARY KEY (id)
);

INSERT INTO Alumnos(Nombre, Identificador, Email, Carrera)
VALUES('PONER_SU_NOMBRE', 'ID_DE_ALUMNO','COLOQUE_SU_CORREO','COLOQUE_SU_CARRERA'),
('INVENTAR_NOMBRE', 'INVERNTAR_ID','INVENTAR_CORREO','INVENTAR_CARRERA')

SELECT * FROM Alumnos

UPDATE Alumnos SET Nombre = 'BORRAR ALUMNO' WHERE Id = 2

DELETE FROM Alumnos WHERE Id = 12

SELECT * FROM Alumnos

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'itesm2022';

flush privileges;