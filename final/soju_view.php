<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Soju info Page</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="main">
    <a href="soju_clerk.php" class="soju_back">Back</a>
<?php 
    if($_GET){
        include_once("api/soju_db_functions.php");
        $rec = getSoju($_GET['id']);
        if($rec == null)
            echo "<h1>Invalid Request</h1>";
        else{
          
            $name =  $rec['name'];
            $alchol_volume = $rec['alchol_volume'];
            $size = $rec['size'];
            $price = $rec['price'];
            $region = $rec['region'];
            $photo =  $rec['photo'];
            
             //NAME
             echo "<h1>$name Information</h1>";
            //IMAGE
            echo "<br/><img src='$photo' width='200px';/>";
            //alcho
            echo "<h1>Alcohol : $alchol_volume %</h1>";
            //size
            echo "<h1>Size : $size ml</h1>";
            //price
            echo "<h1>Price : $price won</h1>";
            //region
            echo "<h1>Region : $region</h1>";
           
        }
    }
    else{
        echo "<h1>Invalid Request</h1>";
    }
?>



</div>

</body>
</html>