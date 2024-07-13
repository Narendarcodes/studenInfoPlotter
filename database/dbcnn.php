<?php
// $servername="Localhost";
// $Username="id20956789_admin";
// $password="Sixty@database1230";
// $databasename="id20956789_info";
$servername="Localhost";
$Username="root";
$password="";
$databasename="info";

$conn=mysqli_connect($servername,$Username,$password,$databasename);
if(!$conn){
    die("Connection failed :".mysqli_connect_error());
}
