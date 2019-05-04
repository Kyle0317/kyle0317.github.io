<?php
    require_once("sess.php");
    if($_SESSION['logged_in']==false){
        header('Location: http://localhost/HW/login.php');
        exit;
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <title>Clerk</title>
</head>
<body>
    <div id="main">
    <a href="products.php" class="products">Products</a>
    <a href="customers.php" class="customers">Customers</a>
    <a href="logout.php" class="loc">Logout </a>
    <h1 class="position">Welcome <?php echo $_SESSION['logged_user'];?>! </h1>
    <div id="footer"> Copyright 2019. Lee Bo Won Systems</div>

</div>
</body>
</html>