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
    $br = null;
    if($link){
        $br = $link->query($query);
    }
    return $br;
}   
function getbeer($id){
    $query = "SELECT * FROM beer WHERE id='$id'";
    global $link;
    $br = null;
    if($link){
        $br = $link->query($query);
    }
    $row = null;
    if($br) 
        $row = $br->fetch_assoc();
    return $row;
}
