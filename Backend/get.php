<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["id_factura"])) {
    exit(".....");
}
$idMascota = $_GET["id_factura"];
$bd = include_once "bd.php";
$sentencia = $bd->prepare("select id_factura, fecha, id_cliente, nombre_cliente, direccion, telefono, correo from consecutivo where id = ?");
$sentencia->execute([$id_factura]);
$mascota = $sentencia->fetchObject();
echo json_encode($consecutivo1);


