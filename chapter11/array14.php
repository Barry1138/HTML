<?php
  $nums1 = array( 1, 2, 30, 32, 34, 36, 38, 40, 100, 200 );

  $nums2 = array_slice($nums1, 2, 6 ); //gets values 30 to 40

  print_r($nums2);
  echo "<br>";

  array_splice($nums1, 2, 6 );  // removes values 30 to 40
  print_r($nums1);
  echo "<br>";

  $nums4 = array(9,99,999);

  array_splice($nums1, 1, 2, $nums4 );
  print_r($nums1);

?>
