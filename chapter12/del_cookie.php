<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Delete a cookie</title>
    </head>
    <body>
        <?php
        
            $expire = time() - 300;          		// 5 minutes in the past
            setcookie('passwd',"",$expire,"/mine/chapter12");
			setcookie('login',"",$expire,"/mine/chapter12");		
            
            echo "HTTP cookies were deleted";
        ?>
    </body>
</html>
