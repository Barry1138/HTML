<?php

  //NOTE 'key'=>value syntax in associative arrays
  $grades = array( 'math'=>88, 'accounting'=>95, 'economics'=>85 );

  echo "foreach for values only <br>";
  foreach( $grades as $v ) {
     echo "$v <br>";
  }

  echo "<br>foreach with keys and values <br>";
  foreach( $grades as $k => $v) {
     echo "$k: $v <br>";
  }

  reset($grades);   //rewinds pointer to start of array
  echo "<br>while with each() <br>";
  while( $element = each($grades) ) {
     echo $element['key']." : ".$element['value']."<br>";
  }

  reset($grades);
  echo "<br>while with list() and each() <br>";
  while( list( $k, $v ) = each( $grades ) ) {
     echo "$k : $v <br>";
  }



?>

