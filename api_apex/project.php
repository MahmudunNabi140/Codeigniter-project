<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET,POST');
header('Access-Control-Allow-Headers: *');
$con=new mysqli("localhost","root","","limty");
$d=$con->query('select * from project ');
$data=$d->fetch_all(MYSQLI_ASSOC);
echo json_encode($data);