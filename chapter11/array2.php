<?php

  $ara = range(7, 10);  // array elements are 7,8,9,10
  echo "$ara[3] <br>";

  $ara = range(0, 100, 10);
  echo "$ara[0], $ara[1], $ara[2], $ara[3] <br>";
  
  $nums = range(0.4, 1.4, 0.2);  // don't need to use integers
  print_r($nums);       // dumps array to screen

  echo '<br>';
  
  $ara = range('A', 'Z');   //creates a 26-element array
  echo "$ara[0] to $ara[25] <br>";

  $ara = range('z', 'a');   //creates a 26-element array
  echo "$ara[0] to $ara[25] <br>";


?>

