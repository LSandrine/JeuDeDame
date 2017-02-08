<?php

class FonctionManager{
	private $db;

    public function __construct($db){
        $this->db = $db;
    }
	
		public function getFonctions(){
				$req = $this->db-> query('select * from fonction');
				while($fonction = $req->fetch(PDO::FETCH_OBJ)){
					$fonctions[] = new Fonction($fonction);
				};
				$req->closeCursor();
				return $fonctions;
		}

		public function getFonctionByNum($num){
			$req = $this->db->prepare('SELECT * FROM fonction WHERE fon_num=:num');
			$req->bindValue(':num',$num,PDO::PARAM_INT);
			$req->execute();
			return new Fonction($req->fetch(PDO::FETCH_OBJ));
		}
}
