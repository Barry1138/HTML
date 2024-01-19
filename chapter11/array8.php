<?php
  $oldbucs = array( 'QB'=>'Johnson',
                    'FB'=>'Alstott',
                    'SS'=>'Lynch',
                    'LB'=>'Brooks'
               );
  asort($oldbucs);
  echo "Sorted by player <br>";
  foreach( $oldbucs as $player ) {
     echo $player." ";
  }

  ksort($oldbucs);
  echo "<br>";
  echo "<br>Sorted by position <br>";
  foreach ( $oldbucs as $pos=>$player ) {
     echo "$pos: $player <br>";
  }
?>

