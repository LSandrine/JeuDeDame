<?php
class SalarieManager{
	private $db;

    function __construct($db){
        $this->db = $db;
    }

		function addSalarie($v){
			$pers = new PersonneManager($this->db);
			$p = new Personne($v);
			$pers->addPersonne($p);
			$req = $this->db->prepare('INSERT INTO salarie (per_num,sal_telprof,fon_num) VALUES (:num,:telprof,:fon_num)');
			$req->bindValue(':num',$this->db->lastInsertID(),PDO::PARAM_INT);
			$req->bindValue(':telprof',$v->getSalTelProf(),PDO::PARAM_STR);
			$req->bindValue(':fon_num',$v->getFonNum(),PDO::PARAM_INT);
			return $req->execute();
		}


		public function getSalarieByNum($num){
			$req = $this->db->prepare('SELECT * FROM personne p inner join salarie s on p.per_num=s.per_num inner join fonction f on s.fon_num=f.fon_num where p.per_num=:num');
			$req->bindValue(':num',$num,PDO::PARAM_INT);
			$req->execute();
			return new Salarie($req->fetch(PDO::FETCH_OBJ));
		}
}
