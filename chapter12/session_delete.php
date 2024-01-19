<?php 
	session_start();
?>
<html>
<head>
  <title>Deleting session</title>
</head>
<body>
<?php

	unset($_SESSION['count']);	
	unset($_SESSION['ip']);
	unset($_SESSION['course']);
	$_SESSION = array();
    
    // destroy the session
    session_destroy();
    
    echo "<h1>Session was destroyed!</h1>";
    
?>
</body>
</html>

