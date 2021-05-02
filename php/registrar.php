<?php


$con= pg_connect("host=localhost dbname=friska user=postgres password=lolxd246") or die("Can't connect to database".pg_last_error());


$nombre= $_POST['nombre'];
$contra= $_POST['contra'];



$query = "INSERT INTO login (username,password)   VALUES('$nombre','$contra')";

$resultado = pg_query($con,$query);


if ($resultado){

    echo "REGISTRO COMPLETADO";
    header("location:dieta.html");
    }

pg_close($con);




?>