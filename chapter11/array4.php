<?php
  //NOTE 'key'=>value syntax for associative arrays
  $grades = array( 'math'=>88, 'accounting'=>95, 'economics'=>85 );
  echo "Accounting Test Score: ".$grades['accounting']."<br>";

  // next line automagically creates $bookcosts associative array
  $bookcosts['math'] = 59.95;
  $bookcosts['economics'] = 44.99;

  // enclose within braces to interpolate
  echo "I scored {$grades['math']}% on a test <br>";
  echo "using my \${$bookcosts['math']} math book <br>";
  // or don't use quotes inside the square brackets
  echo "My economics score was $grades[economics]";
?>

