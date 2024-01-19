<!DOCTYPE html>
<html>
<head>
    <title>After Dinner</title>
    <link rel="stylesheet" type="text/css" href="main.css"/>
</head>

<body>
    <main>
    <h3>Your Selections</h3>
    <?php 
        // read the radios
        $drink = filter_input(INPUT_POST,'drink');
        echo "You selected $drink as your beverage<br>";
        // associative array to get drink price, could also use if, else if etc.
        $drink_prices = array('latte'=>4.50, 'hot tea'=>2.50, 'coffee'=>2.00);
        $total = $drink_prices[$drink];

        // read selected sides
        $sides = filter_input(INPUT_POST,'sides',
                FILTER_SANITIZE_SPECIAL_CHARS,FILTER_REQUIRE_ARRAY);
        
        if($sides != NULL) {
            $num_sides = count($sides);
            echo "<br>You chose these $num_sides sides:<br>";
            foreach($sides as $key => $value) {
                echo "$value<br>";
            }
        }
        $total += $num_sides * 3.00; // add in side prices
        
        // read chosen desserts
        $dess = filter_input(INPUT_POST,'dessert',
                FILTER_SANITIZE_SPECIAL_CHARS,FILTER_REQUIRE_ARRAY);
        if($dess != NULL) {
            $num_dess = count($dess);
            echo "<br>You chose these $num_dess desserts:<br>";
            foreach($dess as $key => $value) {
                echo "$value<br>";
            }
        }
        $total += $num_dess * 4.00; // add in dessert prices
        
        // display total bill
        echo '<br>Your total bill $'. number_format($total,2).'<br>';
        
        $review = filter_input(INPUT_POST,'review');
        $review = nl2br($review,false);  // newlines to br tags
        if($review != '') {
            echo "<br>Here is your review:<br>";
            echo $review;
        }
    ?>
    </main>
</body>
</html>