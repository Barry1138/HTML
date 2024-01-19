<?php 
	$life = 60 * 60 * 24 * 7;    			// 1 week lifetime
	$domain = '127.0.0.1';
	session_set_cookie_params($life,'/');
	session_start();
	
	//create a hit counter persistent for 1 week
	if (!isset($_SESSION['count'])) {
		$_SESSION['count'] = 1;
	} else {
		$_SESSION['count']++;
	}
?>
<html>
<head>
  <title></title>
</head>
<body>
<?php
     echo "Session ID:".session_id();

     //make persistent session variables;
     $_SESSION['ip'] = $_SERVER['REMOTE_ADDR'];   // user's IP address
     $_SESSION['course'] = 'COP 1842';
?>
<br />
<a href="session_2.php">Next Page Here</a>
</body>
</html>
