<?php
$db=new mysqli('localhost','root','','apex');
$db->query("delete from testimonial where id=".$_GET['id']);
header("location:testimonial.php");
?>