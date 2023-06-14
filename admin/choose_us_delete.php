<?php
$db=new mysqli('localhost','root','','apex');
$db->query("delete from choose_us where id=".$_GET['id']);
header('Location: choose_us.php');
?>