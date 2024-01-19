<?php
  $oldbucs = array('Johnson','Alstott','Lynch','Sapp');

  $gone = array_pop($oldbucs);   // sorry Warren!
  echo "Adios, $gone <br>";

  array_push($oldbucs, 'Manning');  //just kiddin'
  arsort($oldbucs);

  echo "<br>Sorted by player in reverse<br>";
  foreach( $oldbucs as $player ) {
     echo $player." ";
  }
  echo "<br>";
  
  shuffle($oldbucs);
  echo "<br>Players Shuffled<br>";
  foreach( $oldbucs as $player ) {
     echo $player." ";
  }

  ////// Refresh your browser to see shuffle effect /////
?>

