<?php

class Controller{

  
  //listar la base de datos
  public function getFactura(){
  
    try{
        $list = array();
        $conexion = new Conexion();
        $db = $conexion->getConexion();
        $query = "SELECT * FROM factura ORDER BY cliente";
        $statement = $db->prepare($query);
        $statement->execute();
        while($row = $statement->fetch()) {
           $list[] = array(
                 "id" => $row['id'],
                 "fecha" => $row['fecha'],
                 "cliente" => $row['cliente'],
                 "mercancia" => $row['mercancia'],
                 "precio" => $row['precio']
                  );
        }//fin del ciclo while 

        return $list;

      }catch(PDOException $e){
        echo "¡Error!: " . $e->getMessage() . "<br/>";
      }
  }

  

public function addProduct($data){
  try{
      $name = $data['id'];
      $price = $data['fecha'];
      $quantity = $data['cliente'];
      $quantity = $data['mercancia'];
      $quantity = $data['precio'];
      $conexion = new Conexion();
      $db = $conexion->getConexion();
      $query = "INSERT INTO factura (id, fecha, cliente, mercancia, precio) VALUES (:id,:fecha,:cliente,:mercancia,:precio)";
      $statement = $db->prepare($query);
      $statement->bindParam(":id", $name);
      $statement->bindParam(":fecha", $price);
      $statement->bindParam(":cliente", $quantity);
      $statement->bindParam(":mercancia", $quantity);
      $statement->bindParam(":precio", $quantity);
      $result = $statement->execute();
      if($result){
         return "successfully";
      }
       return "error!";

     } catch (PDOException $e) {
      echo "¡Error!: " . $e->getMessage() . "<br/>";
   }
}



public function deleteProduct($data){
  try {
       $id = $data['id'];
       $conexion = new Conexion();
       $db = $conexion->getConexion();
       $query = "DELETE FROM product WHERE id=:id";
       $statement = $db->prepare($query);
       $statement->bindParam(':id', $id);
       $result = $statement->execute();
       if($result){
         return "removed";
       }
       return "error!";      

      } catch (PDOException $e) {
          echo "¡Error!: " . $e->getMessage() . "<br/>";
  }
  
}

public function getProduct($data){
    $id = $data['id'];
    $list = array();
    $conexion = new Conexion();
    $db = $conexion->getConexion();
    $query = "SELECT * FROM product WHERE id=:id";
    $statement = $db->prepare($query);
    $statement->bindParam(':id', $id); 
    $statement->execute();
    while($row = $statement->fetch()) {
          $list[] = array(
            "id" => $row['id'],
            "name" => $row['name'],
            "price" => $row['price'],
            "quantity" => $row['quantity'] );
          }//fin del ciclo while 

    return $list[0];
  }


public function updateProduct($data){
 try{
    $id = $data['id'];
    $name = $data['name'];
    $price = $data['price'];
    $quantity = $data['quantity'];
    $conexion = new Conexion();
    $db = $conexion->getConexion();
    $query="UPDATE product SET name=:n,price=:p,quantity=:q
            WHERE id=:id";
    $statement= $db->prepare($query);
    $statement->bindParam(":n", $name);
    $statement->bindParam(":p", $price);
    $statement->bindParam(":q", $quantity);
    $statement->bindParam(":id", $id); 
    $result = $statement->execute();
    if($result){ return "updated"; } 

      return "error!";

   } catch(PDOException $e){
     echo "¡Error!: " . $e->getMessage() . "<br/>";
   }
}


}

?>