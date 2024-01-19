<?php

  $grades = array( 'test1'=>88, 'test2'=>95, 'test3'=>90 );

  extract($grades);  // creates a scalar variable for each element

  echo "Grade average : ".(($test1 + $test2 + $test3) / 3)." %<br>";

?>
