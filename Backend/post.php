<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$json.... = json_decode(file_get_contents("php://input"));
if (!$json....) {
    exit("No hay datos");
}
$bd = include_once "bd.php";
$sentencia = $bd->prepare("insert into consecutivo(id_factura, fecha, id_cliente, nombre_cliente, direccion, telefono, correo) values (?,?,?,?,?,?,?)");
$resultado = $sentencia->execute([$jsonMascota->nombre, $jsonMascota->raza, $jsonMascota->edad]);
echo json_encode([
    "resultado" => $resultado,
]);