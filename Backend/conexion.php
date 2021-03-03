<?php
function retornarConexion (){
$con=mysqli_connect("localhost","root","","facturacion");
return $con;
}

?>