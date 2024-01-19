<?php

   //this array represents a Lotto ticket with 3 lines
   //an array of 3 subarrays, each subarray with 6 elements
   $lotto = array(
               array( 2, 12, 23, 34, 36, 50 ),
               array( 3, 23, 30, 31, 40, 48 ),
               array( 9, 32, 33, 46, 51, 52 )
           );

   echo "Last # in row 2 is ".$lotto[1][5]."<br>";
   echo "3rd # in last row is ".$lotto[2][2]."<br>";

   echo "<br>Here is your ticket:<br><br>";

   for( $row = 0; $row < 3; $row++ )  {
      for( $col = 0; $col < 6; $col++ )  {
         echo $lotto[$row][$col]."&nbsp; &nbsp;";
      }
      echo "<br>";
   }

?>

