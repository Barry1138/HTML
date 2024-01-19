<?php
    require_once('database.php');
	$price = filter_input(INPUT_POST,'price',FILTER_VALIDATE_FLOAT);
	$query = 'SELECT * FROM parts WHERE price >= :price';
    $stmt = $db->prepare($query);
    $stmt->bindValue(':price', $price);
    $stmt->execute();
	$rows = $stmt->fetchAll();
?>

<!DOCTYPE html>
<html>
<head>
    <title>Parts in Price Range</title>
</head>
<body>
    <table border = '2'>
        <tr>
            <th>SKU</th>
            <th>Description</th>
            <th>Manufacturer</th>
            <th>PRICE</th>
        </tr>
        <?php foreach($rows as $row):?>
        <tr>
            <td><?php echo $row['sku'];?></td>
            <td><?php echo $row['descrip'];?></td>
            <td><?php echo $row['manuf'];?></td>
            <td><?php echo $row['price'];?></td>
        </tr>
        <?php endforeach; ?>
    </table>
</body>
</html>
