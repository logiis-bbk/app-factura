<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: DELETE");
$metodo = $_SERVER["REQUEST_METHOD"];
if ($metodo != "DELETE" && $metodo != "OPTIONS") {
    exit("Solo se permite método DELETE");
}

if (empty($_GET["id_factura"])) {
    exit("no hay facturas para eliminar");
}
$id_factura = $_GET["id_factura"];
$bd = include_once "bd.php";
$sentencia = $bd->prepare("DELETE FROM ventas WHERE id_factura = ?");
$resultado = $sentencia->execute([$id_factura]);
echo json_encode($resultado);