<?php
include_once ("beer_db_functions.php");
$status = array("status"=>false);
if($_POST){
    $a= $_POST['name'];
    $b = $_POST['alchol_volume'];
    $c= $_POST['size'];
    $d= $_POST['price'];
    $e = $_POST['region'];
    $f = $_POST['photo'];
    $sql = "INSERT INTO beer (name, alchol_volume, size, price, region, photo) 
    VALUES ('$a', '$b', '$c', '$d','$e', '$f')"; 
    if(saveData($sql))
        $status = array("status"=>true);
}
echo json_encode($status);