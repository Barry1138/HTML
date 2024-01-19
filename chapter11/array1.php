<?php
        $ara = array( 6, 'Federer', 4, 'Nadal' );
        echo "$ara[1] beats $ara[3] $ara[0]-$ara[2] <br>";

        $ara[3] = 'Jokavic';  //element index 3 is reassigned
        $newara = $ara;       //$newara is a copy of $ara

        echo "$newara[1] beats $newara[3] $newara[0]-$newara[2] <br>";
      
?>

