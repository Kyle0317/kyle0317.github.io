<?php
include_once ("beer_db_functions.php");
$sql = "SELECT * FROM beer ORDER BY name";
$br = getData($sql);
$beer = array();
if($br){
    while ($row = $br->fetch_assoc()) {
        $beer[] = $row;
    }
   
}
$data = json_encode($beer);
echo "$data";
