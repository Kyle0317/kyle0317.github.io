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
        Username: <input type="text" name="username" placeholder="User Name"/>
        <br/><br/>
        Password: <input type="password" name="password" placeholder="Password"/>
        <br/>
        
        


    </form>
        <div id="footer2"> Copyright 2019. Lee Bo Won Systems</div>
</div>
</body>
</html>