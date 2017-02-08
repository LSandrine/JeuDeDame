<?php
class DepartementManager{
		private $db;

    public function __construct($db){
        $this->db = $db;
    }


		public function getDepartements(){
				$req = $this->db->query('SELECT * FROM departement');
				while($d = $req->fetch(PDO::FETCH_OBJ)){
					$departements[] = new Departement($d);
				}
				$req->closeCursor();
				return $departements;
		}


		public function getDepartementByNum($num){
			$req = $this->db->prepare('SELECT * FROM departement WHERE dep_num=:num');
			$req->bindValue(':num',$num,PDO::PARAM_INT);
			$req->execute();
			$dep = new Departement($req->fetch(PDO::FETCH_OBJ));
			$req->closeCursor();
			return $dep;
		}
}
