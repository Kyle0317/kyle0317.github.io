<?php
    //LOGOUT

    session_destroy();
    header('Location: http://localhost/HW/login.php');
    exit;


