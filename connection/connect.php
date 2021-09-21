<?php

$username = "csolvecom";
$host = "localhost";
$pass = "";
$database = '5Csolve';

$conn = mysqli_connect($host, $username, $pass, $database);  
if(!$conn ) 
{  
  die('Could not connect: ' . mysqli_connect_error());  
}    

?>  
