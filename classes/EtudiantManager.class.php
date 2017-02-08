<?php
class EtudiantManager{
	private $db;

    function __construct($db){
        $this->db = $db;
    }

		function addEtudiant($Etudiant){
			$PersManag = new PersonneManager($this->db);
			$pers = new Personne($Etudiant);
			$PersManag->addPersonne($pers);
			$req = $this->db->prepare('INSERT INTO etudiant (per_num,dep_num,div_num) VALUES (:num,:dep,:div)');
			$req->bindValue(':num',$this->db->lastInsertID(),PDO::PARAM_INT);
			$req->bindValue(':dep',$Etudiant->getDepNum(),PDO::PARAM_INT);
			$req->bindValue(':div',$Etudiant->getDivNum(),PDO::PARAM_INT);
			return $req->execute();
		}

		public function getEtudiantByNum($num){
			$req = $this->db->prepare('SELECT * FROM personne p inner join etudiant e on p.per_num=e.per_num inner join departement d on e.dep_num=d.dep_num inner join ville v on d.vil_num=v.vil_num
		where p.per_num=:num');
			$req->bindValue(':num',$num,PDO::PARAM_INT);
			$req->execute();
			return new Etudiant($req->fetch(PDO::FETCH_OBJ));
		}
}
