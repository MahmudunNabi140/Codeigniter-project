<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

$con = new mysqli('localhost', 'root', '', 'apex');
$d = $con->query('select * from about_us order by id desc');
$data = $d->fetch_all(MYSQLI_ASSOC);
echo json_encode($data);