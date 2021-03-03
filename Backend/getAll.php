<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
$bd = include_once "bd.php";
$sentencia = $bd->query("select id_factura, fecha, id_cliente, nombre_cliente, direccion, telefono, correo from consecutivo");
$mascotas = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($consecutivo1);