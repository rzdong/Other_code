<?php
$con = mysql_connect("localhost","rzdongmysql","D537F61");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db("rzdongmysql", $con);

$sql="INSERT INTO user (account, password, username, email, self)
VALUES
('$_POST[T1]','$_POST[T2]','$_POST[T3]','$_POST[T4]','$_POST[T5]')";

if (!mysql_query($sql,$con))
  {
  die('Error: ' . mysql_error());
  }
echo "<p align='center'><a href='http://eastice.xyz/denglu.html'>succeed,please clock!</a></p>";

mysql_close($con)
?>