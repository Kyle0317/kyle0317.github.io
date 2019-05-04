<?php 
        require_once("sess.php");
        if($_POST){
                $user = $_POST['username'];
                $pass = $_POST['password'];
            if($user == "admin" && $pass=="admin"){
                $_SESSION['logged_in'] = true;
                $_SESSION['logged_user'] = $user;
                header('Location: http://localhost/HW/admin.php');
                exit;
            }
            if($user == "clerk" && $pass=="clerk"){
                $_SESSION['logged_in'] = true;
                $_SESSION['logged_user'] = $user;
                header('Location: http://localhost/HW/clerk.php');
                exit;
            }
            else{
                header('Location: http://localhost/HW/login.php');
                exit;
            }
        }
    ?>