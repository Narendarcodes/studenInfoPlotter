<?php
$servername="your_server_name";
$Username="your_user_name";
$password="your_password";
$databasename="your_database_name";

$conn=mysqli_connect($servername,$Username,$password,$databasename);
if(!$conn){
    die("Connection failed :".mysqli_connect_error());
}
