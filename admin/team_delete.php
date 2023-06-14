<?php
$db=new mysqli('localhost','root','','apex');
$db->query("delete from team where id=".$_GET['id']);
header('Location: team.php');
?>