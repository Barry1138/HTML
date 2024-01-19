<?php
  $states = array( 'OH' => 'Ohio',
                   'FL' => 'Florida',
                   'NY' => 'New York',
                   'GA' => 'Georgia'
                 );

  $abbrevs = array_keys($states);   //creates array of keys
  $names = array_values($states);   //creates array of values

  print_r($abbrevs);
  echo "<br>";
  print_r($names);
  echo "<br>";

  $states2 = array_flip($states); //flips keys with values
  print_r($states2);

?>
