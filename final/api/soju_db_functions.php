<?php

$host = "localhost";
$user = "root";
$pass = "";
$db = "beershop";
$link = @mysqli_connect($host,$user,$pass,$db);
function saveData($insertQuery){
    global $link;
    if($link){
        $link->query($insertQuery);
        return $link;
    }
    return false;
}
function getData($query){
    global $link;
    $sj = null;
    if($link){
        $sj = $link->query($query);
    }
    return $sj;
}   
function getSoju($id){
    $query = "SELECT * FROM soju WHERE id='$id'";
    global $link;
    $sj = null;
    if($link){
        $sj = $link->query($query);
    }
    $row = null;
    if($sj) 
        $row = $sj->fetch_assoc();
    return $row;
}
