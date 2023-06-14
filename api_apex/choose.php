<?php
header('Access-control-Allow-Origin: *');
header('Access-control-Allow-Methods: GET,POST');
header('Access-control-Allow-Methods: *');
$con=new mysqli("localhost","root","","apex");
$d=$con->query("select * from choose_us ");
$data=$d->fetch_all(MYSQLI_ASSOC);
echo json_encode($data);