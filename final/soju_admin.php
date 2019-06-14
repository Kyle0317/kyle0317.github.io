<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>SOJU Admin</title>
    <link rel="stylesheet" href="style.css">
   
</head>
<body>
    <div id="main">
    <a href="admin.php" class="soju_back">Back</a>
    <a href="logout.php" class="soju_logout">Logout </a>
    <h1>SOJU LIST</h1>
<div id="entry">
    
    Name: <input type="text" id="name" autocomplete="off"/><br/>
    Alchol volume: <input type="text" id="alchol_volume"><br/>
    Size: <input type="text" id="size"><br/>
    Price: <input type="text" id="price"><br/>
    Region: <input type="text" id="region"><br/>
    Photo: <input type="url" id="photo"><br/>
    

    <p id="print"></p>
    <button id="btn_save">Save</button>
    </div>
    <hr/>
    <table id="list" width="100%" border="1">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Alchol</th>
            <th>Size</th>
            <th>Price</th>
            <th>Region</th>
        </tr>

    </table>
    <script src="soju.js"></script>

</div>

</div>
</body>
</html>