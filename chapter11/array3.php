<?php
  $ara[0] = 10;    //automagically creates array named $ara
  $ara[1] = 20;
  $ara[2] = 30;

  //NOTE: loop control variable within []
  echo "for loop <br>";
  for( $i = 0; $i < 3; $i++ ) {
       echo "$ara[$i] <br>";
  }

  echo "while loop <br>";
  $i = 0;
  while( $i < 3 ) {
       echo "$ara[$i] <br>";
       ++$i;      //else an endless loops results
  }

  echo "foreach loop <br>";
  foreach( $ara as $val ) {
       echo "$val <br>";
  }
?>

