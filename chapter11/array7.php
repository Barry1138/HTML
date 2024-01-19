<?php

  $clients = array("Kenny","Lenny","Denny","Benny","Jenny","Penny" );
  $addresses = array("3 Elm St", "43 Oak Ave","11 Elm St",
                     "66 Yew Dr","99 Fir Ct","55 Ash St"
                    );

  echo "Values sorted alpha <br>";
  sort($clients);
  foreach( $clients as $cl ) {
     echo "$cl <br>";
  }

  echo "<br>Addresses sorted regular <br>";
  sort($addresses);
  foreach( $addresses as $addr ) {
     echo "$addr <br>";
  }

  echo "<br>Addresses sorted numeric <br>";
  sort($addresses, SORT_NUMERIC );
  foreach( $addresses as $addr ) {
     echo "$addr <br>";
  }
?>

