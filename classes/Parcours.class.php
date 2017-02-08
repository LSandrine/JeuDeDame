<?php
class Parcours{
	public function __construct($tabParcours=array()){
		if(!empty($tabParcours))$this -> affecte($tabParcours);
	}
	public function affecte($tabParcours){
		foreach($tabParcours as $attribut => $valeur){
			switch($attribut){
				case 'par_km':$this -> setkmParcours($valeur);
				break;
				case 'par_num':$this -> setnumParcours($valeur);
				break;
				case 'vil_nom1':$this -> setnomVille1($valeur);
				break;
				case 'vil_nom2':$this -> setnomVille2($valeur);
				break;
				case 'vil_num1':$this -> setnumVille1($valeur);
				break;
				case 'vil_num2':$this -> setnumVille2($valeur);
				break;
			}
		}
	}
	public function getnomVille1(){
		return $this -> vil_nom1;
	}
	public function setnomVille1($vil_nom1){
		$this -> vil_nom1 = $vil_nom1;
	}
	public function getnomVille2(){
		return $this -> vil_nom2;
	}
	public function setnomVille2($vil_nom2){
		$this -> vil_nom2 = $vil_nom2;
	}
	
	public function getnumParcours(){
		return $this -> par_num;
	}
	public function setnumParcours($par_num){
		$this -> par_num = $par_num;
	}
	public function getkmParcours(){
		return $this -> par_km;
	}
	public function setkmParcours($par_km){
		$this -> par_km = $par_km;
	}
	public function getnumVille1(){
		return $this -> vil_num1;
	}
	public function setnumVille1($vil_num1){
		$this -> vil_num1 = $vil_num1;
	}
	public function getnumVille2(){
		return $this -> vil_num2;
	}
	public function setnumVille2($vil_num2){
		$this -> vil_num2 = $vil_num2;
	}
}