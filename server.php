<?php
include __DIR__.'/data.php';

$result = [];

if(isset($_GET['genre'])){
    foreach($albums as $value){
        if($value['genre'] == $_GET['genre']){
            $result[] = $value;
        }
    }
} else {
    $result = $albums;
}

header('Content-Type: application/json');
echo json_encode($result)
?>