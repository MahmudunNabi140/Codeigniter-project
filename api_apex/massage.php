<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: *");

$data=json_decode(file_get_contents('php://input'),true);
$con=new mysqli("localhost","root","","homelone");
$msg=$data['msg'];
$name=$data['name'];
$email=$data['email'];
$subject=$data['subject'];
if (isset($msg)) {
$con->query("INSERT INTO msg (massage, name, email, subject) VALUES ('".$msg."', '".$name."', '".$email."', '".$subject."') ");
   
}




echo json_encode($data);