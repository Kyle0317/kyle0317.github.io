<?php
    //LOGOUT

    session_destroy();
    header('Location: http://localhost/prac/login.php');
    exit;


