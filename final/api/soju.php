<?php
include_once ("soju_db_functions.php");
$sql = "SELECT * FROM soju ORDER BY name";
$sj = getData($sql);
$soju = array();
if($sj){
    while ($row = $sj->fetch_assoc()) {
        $soju[] = $row;
    }
   
}
$data = json_encode($soju);
echo "$data";
