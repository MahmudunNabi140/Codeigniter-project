<?php
$db=new mysqli('localhost','root','','apex');
if(isset($_POST['title'])){
    $title=$_POST['title'];
    $details=$_POST['details'];
    $file=$_FILES['photo']['name'];
    if(move_uploaded_file($_FILES['photo']['tmp_name'],'../assets/image/'.$file)){
        $db->query("Update services set title='$title',details='$details',photo='$file'where id=".$_GET['id']);
    }else{
        $db->query("Update services set title='$title',details='$details'where id=".$_GET['id']);
    }
    header("Location:service.php");

}
?>