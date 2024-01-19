<?php

  $nums[] = 10;   //no index! OK for numeric arrays
  $nums[] = 20;
  $nums[] = 30;
  $nums[] = 40;

  print_r($nums); //prints out the array for viewing
  echo "<br>";

  array_shift($nums);  //removes first element
  array_unshift($nums, 5);  //adds 5 to start of array

  print_r($nums);

?>
