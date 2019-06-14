<?php
    require_once("sess.php");
    if($_SESSION['logged_in']==false){
        header('Location: http://localhost/prac/login.php');
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
    <h1 class="position">Welcome <?php echo $_SESSION['logged_user'];?>! </h1>
    <a href="logout.php" class="lo">Logout </a>
    <a href="soju_clerk.php" class="soju">Soju</a>
    <a href="beer_clerk.php" class="beer">Beer</a>
    <div id=admin_main>
<br/>
    <br/><img src="/prac/images/clerk_main.jpg" width='550px'>
    
</div>
    <div id="footer"> Copyright 2019. Lee Bo Won Systems</div>

</div>
</body>
</html>