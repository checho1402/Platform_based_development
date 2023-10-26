CREATE DATABASE friska;

CREATE TABLE dietas(
id SERIAL NOT NULL,
nombre_dieta VARCHAR(255) NOT NULL,
desayuno VARCHAR(255),
almuerzo VARCHAR(255),
cena VARCHAR(255),
PRIMARY KEY(id)
);

CREATE TABLE login(
id SERIAL NOT NULL,
username VARCHAR(255) NOT NULL,
password VARCHAR(255) NOT NULL,
dieta_id INT,
FOREIGN KEY (dieta_id) REFERENCES dietas(id)
);