<?php
$db=new mysqli('localhost','root','','apex');
$db->query("delete from about_us where id=".$_GET['id']);
header('Location: about_us.php');
?>