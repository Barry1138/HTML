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

        $dess = filter_input(INPUT_POST,'dessert',
                FILTER_SANITIZE_SPECIAL_CHARS,FILTER_REQUIRE_ARRAY);

        if($dess != NULL) {
            $num_dess = count($dess);
            echo "<br>You chose these $num_dess desserts:<br>";
            foreach($dess as $key => $value) {
                echo "$value<br>";
            }
        }
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