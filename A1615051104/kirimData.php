<?php
 
	// Importing DBConfig.php file.
	include 'connect.php';
	 
	 // Getting the received JSON into $json variable.
	 $json = file_get_contents('php://input');
	 
	 // decoding the received JSON and store into $obj variable.
	$obj = json_decode($json,true);
	$Nama = $obj['Nama'];
	$Harga = $obj['Harga'];
	$Os = $obj['Os'];
	$Cpu = $obj['Cpu'];
	$Ram = $obj['Ram'];
	$Storage = $obj['Storage'];
	$UkuranHp = $obj['UkuranHp'];
	$TipeNetwork = $obj['TipeNetwork'];
	$KameraDepan = $obj['KameraDepan'];
	$KameraBelakang = $obj['KameraBelakang'];
	$Berat = $obj['Berat'];
	 
	 // Creating SQL query and insert the record into MySQL database table.
	$Sql_Query = "
	INSERT INTO `u7039630_appmhs`.`A104_refisimi` (
  `Nama`,
  `Harga`,
  `Os`,
  `Cpu`,
  `Ram`,
  `Storage`,
  `UkuranHp`,
  `TipeNetwork`,
  `KameranDepan`,
  `KameraBelakang`,
  `Berat`
) 
VALUES
  (
    '$Nama',
	'$Harga',
	'$Os',
	'$Cpu',
	'$Ram',
	'$Storage',
	'$UkuranHp',
	'$TipeNetwork',
	'$KameraDepan',
	'$KameraBelakang',
	'$Berat'
  )";
	 
	 if(mysqli_query($conn,$Sql_Query)){
			$MSG = 'Data Kunjungan Sudah Disimpan!' ;
			$json = json_encode($MSG);

			 echo $json ;
	 }
	 else{
			$MSG = 'Input gagal!' ;
			$json = json_encode($MSG);

			 echo $json ;
			
	 
	 }
	mysqli_close($con);
	
?>