<?php
$con = mysql_connect("localhost","rzdongmysql","D537F61");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db("rzdongmysql", $con);

$result = mysql_query("SELECT account,password FROM user");

while($row = mysql_fetch_array($result))
  {
	  if( $row['account']==$_POST['M1'] && $row['password']==$_POST['M2'])
	  {
	       header("Location: http://eastice.xyz/zhuye.html");
	  }
	  else
	  {
		  echo "<p align='center'><a href='http://eastice.xyz/denglu.html'>You haven't signed up yet.please clock!</a></p>";
	  }
  }

mysql_close($con);
?>