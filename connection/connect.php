<?php



$host = "localhost";
$username = "csolvecom";
$pass = "";
$database = '5csolve';


$conn = mysqli_connect($host, $username, $pass, $database);  
if(!$conn) 
{  
  die('Could not connect: ' . mysqli_connect_error());  
} 



//mysqli_close($conn);
?>  