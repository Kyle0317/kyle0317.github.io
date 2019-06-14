<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div id="main">
    <a href="index.php" class="back1">Back</a>
    <a href="#" onclick="javascript:document.mine.submit();" class="li">Login</a>
    <h1 class="login">Login</h1>
    <form name="mine" method="POST" action="login-check.php"><br/>
        Username: <input type="text" name="username" autocomplete="off" placeholder="User Name"/>
        <br/><br/>
        Password: <input type="password" name="password" placeholder="Password"/>
        <br/>
        <img src="/prac/images/login_main.jpg" width='550px'>
        
        <div id="footer"> Copyright 2019. Lee Bo Won Systems</div>

    </form>
</div>
</body>
</html>