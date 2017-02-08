<?php
class Mypdo extends PDO
{

	protected $dbo;

	public function __construct ()
	{

		if (ENV=='dev'){
			$bool=true;
		}
		else
		{
			$bool=false;
		}
		try {
			$this->dbo =parent::__construct("mysql:host=".DBHOST."; dbname=".DBNAME."; charset=UTF8", DBUSER, DBPASSWD,
			array(PDO::ATTR_PERSISTENT => true, PDO::ATTR_ERRMODE => $bool, PDO::ERRMODE_EXCEPTION => $bool));
			
		}
		catch (PDOException $e) {
			echo 'échec lors de la connexion : ' . $e->getMessage();
		}
	}


}

?>

