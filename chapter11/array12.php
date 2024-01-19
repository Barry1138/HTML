<?php
  $ara = array( 0, 1, 2, 3, 1, 3, 4, 1, 4, 2, 3, 3 );
  $freq = array_count_values($ara);  // awesome function !!
  
  ///// $freq is associative array holding counts of unique values in $ara

  foreach( $freq as $key => $val ) {
     echo "$key - count : $val <br>";
  }
?>
