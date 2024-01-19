<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
            $user_name = filter_input(INPUT_POST,'user');
            $pass = filter_input(INPUT_POST,'passwd');
            
            setcookie('login',$user_name,strtotime('+2 months'));
            setcookie('passwd',$pass,strtotime('+2 months'));
            
            echo 'Cookies were set';
        ?>
    </body>
</html>
