<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
        // demo of htmlspecialchars() function
        // browse the specchars table in databbase test
        // after running this script.
         
        try {
            $dsn = 'mysql:host=localhost;dbname=test';
            $db = new PDO($dsn, 'root', '');
        } catch (PDOException $e) {
            $error_message = $e->getMessage();
            include('database_error.php');
            exit();
        }
        
        $stmt = $db->prepare("INSERT INTO specchars (data) VALUES (?)");
        $stmt->bindParam(1, $str);
        
        $str = $_GET['str'];
        echo $str.'<br>';
        $stmt->execute();   // inserts a record

        $str = htmlspecialchars($str, ENT_QUOTES);
        echo $str.'<br>';
        $stmt->execute();   // inserts another record

        echo htmlentities($str,ENT_QUOTES).'<br>';
        echo htmlspecialchars_decode($str).'<br>';
        echo "Records added. View Source to see the effect.<br>";
        echo "Also, browse the specchars table in test.";
        ?>
    </body>
</html>
