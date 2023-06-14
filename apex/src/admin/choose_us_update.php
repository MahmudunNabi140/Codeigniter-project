<?php
$db=new mysqli('localhost','root','','apex');
if(isset($_POST['title'])){
    $title=$_POST['title'];
    $details=$_POST['details'];
    $db->query("update choose_us set title='$title',details='$details' where id=".$_GET['id']);
    header('Location:choose_us.php');
}