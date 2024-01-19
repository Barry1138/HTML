<?php 
	session_start();
?>
<html>
<head>
  <title></title>
</head>
<body>
<?php

     echo "This is session_2.php <br>";
     echo "Welcome, valued user from IP Address ".$_SESSION['ip']."<br>";
     echo "Number of times you have visited page 1 = ".$_SESSION['count'];
     echo "<br>";

     $cookies = session_get_cookie_params();
     
     foreach ( $cookies as $k => $v ) {
         echo "$k: $v <br>";
     }
     
     echo "<h2>All elements in \$_SESSION</h2>";
?>
    <table border="2" cellpadding="2">
<?php
     foreach($_SESSION as $k => $v) {
         echo "<tr><td>$k</td><td>$v</td>";
     }
?>
    </table>    
</body>
</html>

