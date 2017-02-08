<?php
class VilleManager{
	private $db;
		
		public function __construct($db){
			$this -> db = $db;
		}

		public function getAllVille(){
			$tableObjVille = Array();
			$sql = "select vil_num,vil_nom from ville";
			$req=$this ->db -> query($sql);
			while($ligne = $req -> Fetch(PDO::FETCH_OBJ)){
				$tableObjVille[]=new Ville($ligne);
			};
			$req -> closeCursor();
			return $tableObjVille;
		}
		
		public function getNomVille($vil_num){
			$sql = "select vil_nom from ville where vil_num=$vil_num";
			$req=$this ->db -> query($sql);
			$ligne = $req -> Fetch(PDO::FETCH_OBJ);
			$ObjVille=new Ville($ligne);
			return $ObjVille;
		}
		
		public function getAllParcoursArr($vil_cor){
			$tableObjParcoursArr = Array();
			$sqlArr = "select vil_num,vil_nom from parcours , ville  where vil_num=vil_num1 and vil_num2='$vil_cor'
			union
			select vil_num,vil_nom from parcours , ville  where vil_num=vil_num2 and vil_num1='$vil_cor'";
			$reqArr=$this ->db -> query($sqlArr);
			while($ligneArr = $reqArr -> Fetch(PDO::FETCH_OBJ)){
				$tableObjParcoursArr[]=new Ville($ligneArr);
			};
			$reqArr -> closeCursor();
			return $tableObjParcoursArr;
		}

		public function ajoutVille($ville){
			$reqVil="insert into `ville` (`vil_nom`)values(:vil_nom)";
			$repVil=$this->db->prepare($reqVil);
			$repVil->bindValue(':vil_nom',$ville,PDO::PARAM_STR);
			$repVil->execute();
		}
}
?>