<?php
class ProposeManager{
	
		private $db;
	
		public function __construct($db){
			$this -> db = $db;
		}
			
		public function getAllVillePropose(){
			$tableObjVillePropose = Array();
			$sql = "select distinct vil_nom, vil_num from parcours pa, ville v where v.vil_num=pa.vil_num1 
					union all
					select distinct vil_nom, vil_num from parcours pa, ville v where v.vil_num=pa.vil_num2";
			$req=$this ->db -> query($sql);
			while($ligne = $req -> Fetch(PDO::FETCH_OBJ)){
				$tableObjVillePropose[$ligne->vil_num]=$ligne->vil_nom;
			};
			$req -> closeCursor();
			return $tableObjVillePropose;
		}
		

		

	
		public function ajoutPropose($propose,$sens,$par_num,$per_num){
			$reqPropose="insert into `propose` (`par_num`,`per_num`,`pro_date`,`pro_time`,`pro_place`,`pro_sens`)values('$par_num', '$per_num', :pro_date, :pro_time, :pro_place, '$sens')";
			$repPropose=$this->db->prepare($reqPropose);
			
			$repPropose->bindValue(':pro_date',$propose->getdatePropose(),PDO::PARAM_STR);
			$repPropose->bindValue(':pro_time',$propose->gettimePropose(),PDO::PARAM_STR);
			$repPropose->bindValue(':pro_place',$propose->getplacePropose(),PDO::PARAM_INT);
			$repPropose->execute();
		}
	}
	
	?>
	
		