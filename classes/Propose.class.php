<?php
class Propose{
	
	public function __construct($tabPropose=array()){
		if(!empty($tabPropose))$this -> affecte($tabPropose);
	}
	public function affecte($tabPropose){
		foreach($tabPropose as $attribut => $valeur){
			switch($attribut){
				case 'per_num':$this -> setnumPersonne($valeur);
				break;
				case 'par_num':$this -> setnumParcours($valeur);
				break;
				case 'pro_date':$this -> setdatePropose($valeur);
				break;
				case 'pro_time':$this -> settimePropose($valeur);
				break;
				case 'pro_place':$this -> setplacePropose($valeur);
				break;
				case 'pro_sens':$this -> setsensPropose($valeur);
				break;
			}
		}
	}
	public function getnumPersonne(){
		return $this -> per_num;
	}
	public function setnumPersonne($per_num){
		$this -> per_num = $per_num;
	}
	
	public function getdatePropose(){
		return $this -> pro_date;
	}
	public function setdatePropose($pro_date){
		$this -> pro_date = $pro_date;
	}

	public function getnumParcours(){
		return $this -> par_num;
	}
	public function setnumParcours($par_num){
		$this -> par_num = $par_num;
	}
	
	public function gettimePropose(){
		return $this -> pro_time;
	}
	public function settimePropose($pro_time){
		$this -> pro_time = $pro_time;
	}
	
	public function getplacePropose(){
		return $this -> pro_place;
	}
	public function setplacePropose($pro_place){
		$this -> pro_place = $pro_place;
	}
	
	public function getsensPropose(){
		return $this -> pro_sens;
	}
	public function setsensPropose($pro_sens){
		$this -> pro_sens = $pro_sens;
	}
}