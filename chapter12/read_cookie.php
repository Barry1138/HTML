<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Read the cookies</title>
    </head>
    <body>
        <?php
            $user = filter_input(INPUT_COOKIE,'login');
            $pass = filter_input(INPUT_COOKIE,'passwd');
            
            echo "Welcome back $user with password $pass";
        ?>
    </body>
</html>
