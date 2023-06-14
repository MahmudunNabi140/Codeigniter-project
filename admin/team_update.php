<?php
$db=new mysqli('localhost','root','','apex');
if(isset($_POST['title'])){
    $name=$_POST['name'];
    $title=$_POST['title'];
    $file=$_FILES['photo']['name'];
    if(move_uploaded_file($_FILES['photo']['tmp_name'],'../assets/image/'.$file)){
        $db->query("update team set title='$title',name='$name',photo='$file' where id=".$_GET['id']);
    }else{
        $db->query("update team set title='$title',name='$name' where id=".$_GET['id']);
    }
    header('Location:team.php');
}