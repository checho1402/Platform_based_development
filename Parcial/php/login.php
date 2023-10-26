<?php


$con= pg_connect("host=localhost dbname=friska user=postgres password=lolxd246") or die("Can't connect to database".pg_last_error());


$user= $_POST['usuario'];
$contra = $_POST['clave'];
//$contra = (string)$contra;


$query = "SELECT username  FROM login WHERE password = $contra";
$resultado = pg_query($con,$query);
 //echo $query;
if($resultado){
//$resultado = pg_query($con,$query);
echo "LOGEO EXITOSO";
//header("location:funcion_doctor.html");
}
    
else{
    echo "error de logeo, usuario no encontrado";
}


pg_close($con);

?>