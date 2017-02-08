<?php
class ParcoursManager{
	private $db;
		
		public function __construct($db){
			$this -> db = $db;
		}

		public function getAllParcours(){
			$tableObjParcours = Array();
			$sql = "select par_num ,par_km ,v1.vil_nom as vil_nom1,v2.vil_nom as vil_nom2 from parcours p, ville v1, ville v2 where v1.vil_num=vil_num1 and v2.vil_num=vil_num2";
			$req=$this ->db -> query($sql);
			while($ligne = $req -> Fetch(PDO::FETCH_OBJ)){
				$tableObjParcours[]=new Parcours($ligne);
			};
			$req -> closeCursor();
			return $tableObjParcours;
		}
		
		public function testSens($VD,$VA){
			
			$sql = "select 1 as pro_sens, par_num from parcours p,ville  v where v.vil_num=p.vil_num1 and p.vil_num2= '$VA'
					  union
			 		 select 0 as pro_sens, par_num from parcours p,ville  v where v.vil_num=p.vil_num2 and p.vil_num1= '$VD'";
			$req=$this ->db -> query($sql);
			$ligne = $req -> Fetch(PDO::FETCH_OBJ);
			return $ligne->pro_sens;
		}
		
		
		public function getParNumPro($VD,$VA){
			$sql = "select par_num  from parcours where '$VD'=vil_num1
			and '$VA'=vil_num2 
				union
			select par_num  from parcours where '$VD'=vil_num2 
			and '$VA'=vil_num1";
				$req=$this ->db -> query($sql);
				$ligne = $req -> Fetch(PDO::FETCH_OBJ);
				return $ligne->par_num;
			
		}
		
		public function ajoutParcours($parcours){
			$reqParcours="insert into `parcours` (`par_km`,`vil_num1`,`vil_num2`)values(:par_km, :vil_num1, :vil_num2)";
			$repParcours=$this->db->prepare($reqParcours);
			$repParcours->bindValue(':vil_num1',$parcours->getnumVille1(),PDO::PARAM_INT);
			$repParcours->bindValue(':vil_num2',$parcours->getnumVille2(),PDO::PARAM_INT);
			$repParcours->bindValue(':par_km',$parcours->getkmParcours(),PDO::PARAM_INT);
			$repParcours->execute();
		}
}

?>

